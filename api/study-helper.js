const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_MESSAGES = 8;
const MAX_CHARS = 1200;
const DAILY_LIMIT = Number(process.env.STUDY_HELPER_DAILY_LIMIT || 20);
const configuredProvider = (process.env.STUDY_HELPER_PROVIDER || "auto").toLowerCase();
const memory = globalThis.__otcStudyHelperUsage || new Map();
globalThis.__otcStudyHelperUsage = memory;

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(body));
}

function clientKey(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwarded) ? forwarded[0] : String(forwarded || "").split(",")[0];
  return `${new Date().toISOString().slice(0, 10)}:${ip || req.socket?.remoteAddress || "unknown"}`;
}

function checkLimit(req) {
  const key = clientKey(req);
  const now = Date.now();
  const record = memory.get(key) || { count: 0, reset: now + DAY_MS };
  if (now > record.reset) {
    record.count = 0;
    record.reset = now + DAY_MS;
  }
  if (record.count >= DAILY_LIMIT) return { ok: false, remaining: 0, reset: record.reset };
  record.count += 1;
  memory.set(key, record);
  return { ok: true, remaining: Math.max(DAILY_LIMIT - record.count, 0), reset: record.reset };
}

function cleanMessages(messages) {
  return (Array.isArray(messages) ? messages : [])
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role === "assistant" ? "assistant" : "user",
      content: String(message.content || "").slice(0, MAX_CHARS)
    }))
    .filter((message) => message.content.trim());
}

function systemPrompt() {
  return [
    "You are OTC Study Hub AI Helper, a concise bilingual study-support assistant for Overseas Tutorial Centre.",
    "Answer in the learner's language when clear; otherwise use brief English with Chinese support.",
    "Scope: OTC courses, IH placement/interview preparation, BTEC/Pearson, A Level, IB, OTHM study guides, academic English and study planning.",
    "Do not write model answers for assessed work, complete assignments, guarantee admissions, claim official endorsement, or provide legal/visa/medical advice.",
    "If the learner asks for out-of-scope or high-stakes advice, give a safe study-oriented explanation and suggest contacting OTC staff.",
    "Keep answers short, practical, and tutorial-focused."
  ].join(" ");
}

function openAIText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((part) => part.type === "output_text" || part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

async function callOpenAI(messages) {
  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured");
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: systemPrompt(),
      input: [{
        role: "user",
        content: [{
          type: "input_text",
          text: messages.map((message) => `${message.role.toUpperCase()}: ${message.content}`).join("\n\n")
        }]
      }],
      max_output_tokens: Number(process.env.STUDY_HELPER_MAX_TOKENS || 420)
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || "OpenAI request failed");
  return openAIText(data) || "I could not generate a response this time.";
}

async function callClaude(messages) {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not configured");
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest",
      system: systemPrompt(),
      max_tokens: Number(process.env.STUDY_HELPER_MAX_TOKENS || 420),
      messages
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || "Claude request failed");
  return (data.content || []).filter((part) => part.type === "text").map((part) => part.text).join("\n").trim() || "I could not generate a response this time.";
}

function chooseProvider() {
  if (configuredProvider !== "auto") return configuredProvider;
  if (process.env.OPENAI_API_KEY) return "openai";
  if (process.env.ANTHROPIC_API_KEY) return "claude";
  return "openai";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });
  const limit = checkLimit(req);
  if (!limit.ok) return send(res, 429, { error: "Daily AI helper limit reached.", remaining: 0, reset: limit.reset });

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
    const messages = cleanMessages(body.messages);
    if (!messages.length) return send(res, 400, { error: "Please send a question first.", remaining: limit.remaining, reset: limit.reset });

    const activeProvider = chooseProvider();
    const text = activeProvider === "anthropic" || activeProvider === "claude"
      ? await callClaude(messages)
      : await callOpenAI(messages);

    return send(res, 200, { text, remaining: limit.remaining, reset: limit.reset, provider: activeProvider === "anthropic" ? "claude" : activeProvider });
  } catch (error) {
    return send(res, 500, {
      error: "AI Helper is not available yet. Please check the server API key and model settings.",
      detail: process.env.NODE_ENV === "development" ? String(error.message || error) : undefined,
      remaining: limit.remaining,
      reset: limit.reset
    });
  }
};
