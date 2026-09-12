(function () {
  "use strict";

  var storageKey = "otc-korean-starter-v1";
  var initial = { learned: [], correct: 0, attempts: 0, streak: 0, lastDay: "", flashIndex: 0, wrong: [] };
  var state = loadState();

  var consonants = [
    ["ㄱ", "g/k"], ["ㄴ", "n"], ["ㄷ", "d/t"], ["ㄹ", "r/l"], ["ㅁ", "m"],
    ["ㅂ", "b/p"], ["ㅅ", "s"], ["ㅇ", "silent/ng"], ["ㅈ", "j"], ["ㅊ", "ch"],
    ["ㅋ", "k"], ["ㅌ", "t"], ["ㅍ", "p"], ["ㅎ", "h"]
  ];
  var vowels = [
    ["ㅏ", "a"], ["ㅑ", "ya"], ["ㅓ", "eo"], ["ㅕ", "yeo"], ["ㅗ", "o"],
    ["ㅛ", "yo"], ["ㅜ", "u"], ["ㅠ", "yu"], ["ㅡ", "eu"], ["ㅣ", "i"]
  ];
  var words = [
    { ko: "안녕하세요", roman: "annyeonghaseyo", zh: "你好", example: "안녕하세요? 저는 민지예요。你好，我是敏智。" },
    { ko: "감사합니다", roman: "gamsahamnida", zh: "謝謝", example: "도와줘서 감사합니다。謝謝你的幫忙。" },
    { ko: "네", roman: "ne", zh: "是／好的", example: "네, 알겠습니다。好的，我明白了。" },
    { ko: "아니요", roman: "aniyo", zh: "不是／不用", example: "아니요, 괜찮아요。不用了，沒關係。" },
    { ko: "이름", roman: "ireum", zh: "名字", example: "이름이 뭐예요? 你叫什麼名字？" },
    { ko: "학생", roman: "haksaeng", zh: "學生", example: "저는 학생이에요。我是學生。" },
    { ko: "학교", roman: "hakgyo", zh: "學校", example: "학교에 가요。去學校。" },
    { ko: "친구", roman: "chingu", zh: "朋友", example: "제 친구예요。這是我的朋友。" },
    { ko: "오늘", roman: "oneul", zh: "今天", example: "오늘 공부해요。今天學習。" },
    { ko: "내일", roman: "naeil", zh: "明天", example: "내일 만나요。明天見。" },
    { ko: "물", roman: "mul", zh: "水", example: "물 주세요。請給我水。" },
    { ko: "커피", roman: "keopi", zh: "咖啡", example: "커피 한 잔 주세요。請給我一杯咖啡。" },
    { ko: "밥", roman: "bap", zh: "飯／一餐", example: "밥 먹었어요? 吃飯了嗎？" },
    { ko: "좋아요", roman: "joayo", zh: "好／喜歡", example: "한국어가 좋아요。我喜歡韓語。" },
    { ko: "괜찮아요", roman: "gwaenchanayo", zh: "沒關係／還好", example: "저는 괜찮아요。我沒事。" },
    { ko: "어디", roman: "eodi", zh: "哪裡", example: "화장실이 어디예요? 洗手間在哪裡？" },
    { ko: "얼마예요", roman: "eolmayeyo", zh: "多少錢", example: "이거 얼마예요? 這個多少錢？" },
    { ko: "주세요", roman: "juseyo", zh: "請給我", example: "메뉴 주세요。請給我菜單。" },
    { ko: "공부", roman: "gongbu", zh: "學習", example: "한국어 공부를 해요。我學韓語。" },
    { ko: "한국어", roman: "hangugeo", zh: "韓語", example: "한국어를 배워요。我在學韓語。" }
  ];
  var quiz = words.map(function (word, index) {
    var others = words.filter(function (_, itemIndex) { return itemIndex !== index; });
    var distractors = [others[(index + 3) % others.length].zh, others[(index + 8) % others.length].zh, others[(index + 13) % others.length].zh];
    var choices = [word.zh].concat(distractors);
    choices.sort(function (a, b) { return hash(word.ko + a) - hash(word.ko + b); });
    return { prompt: word.ko + " 是什麼意思？", answer: word.zh, choices: choices, note: word.roman + "｜" + word.example };
  });
  var currentQuestion = 0;
  var locked = false;

  function hash(text) {
    var value = 0;
    for (var i = 0; i < text.length; i += 1) value = ((value << 5) - value) + text.charCodeAt(i);
    return value;
  }

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey));
      return Object.assign({}, initial, saved || {});
    } catch (error) {
      return Object.assign({}, initial);
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    renderProgress();
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function markDailyUse() {
    var today = todayKey();
    if (state.lastDay === today) return;
    var yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastDay === yesterday ? state.streak + 1 : 1;
    state.lastDay = today;
    saveState();
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      alert("目前瀏覽器不支援語音播放，可改用 Chrome、Edge 或 Safari 最新版本。");
      return;
    }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.78;
    var voices = window.speechSynthesis.getVoices();
    var voice = voices.find(function (item) { return /^ko/i.test(item.lang); });
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }

  function renderLetters(target, items) {
    target.innerHTML = "";
    items.forEach(function (item) {
      var button = document.createElement("button");
      button.className = "ko-letter";
      button.type = "button";
      button.setAttribute("aria-label", "播放 " + item[0] + " 的示範音");
      button.innerHTML = "<strong>" + item[0] + "</strong><small>" + item[1] + "</small>";
      button.addEventListener("click", function () { speak(item[0] + "아"); });
      target.appendChild(button);
    });
  }

  function renderFlash() {
    var index = state.flashIndex % words.length;
    var word = words[index];
    document.querySelector("[data-ko-flash-word]").textContent = word.ko;
    document.querySelector("[data-ko-flash-roman]").textContent = word.roman;
    document.querySelector("[data-ko-flash-meaning]").textContent = word.zh;
    document.querySelector("[data-ko-flash-example]").textContent = word.example;
    document.querySelector("[data-ko-flash-count]").textContent = (index + 1) + " / " + words.length;
    var learnedButton = document.querySelector("[data-ko-learned]");
    learnedButton.textContent = state.learned.indexOf(word.ko) >= 0 ? "已掌握 ✓" : "標記為已掌握";
  }

  function renderQuiz() {
    locked = false;
    var item = quiz[currentQuestion % quiz.length];
    document.querySelector("[data-ko-question-no]").textContent = "第 " + ((currentQuestion % quiz.length) + 1) + " 題／" + quiz.length;
    document.querySelector("[data-ko-question]").textContent = item.prompt;
    document.querySelector("[data-ko-feedback]").textContent = "選一個答案；答錯的題目會進入錯題重練。";
    var list = document.querySelector("[data-ko-choices]");
    list.innerHTML = "";
    item.choices.forEach(function (choice) {
      var button = document.createElement("button");
      button.className = "ko-choice";
      button.type = "button";
      button.textContent = choice;
      button.addEventListener("click", function () { answerQuestion(button, choice, item); });
      list.appendChild(button);
    });
  }

  function answerQuestion(button, choice, item) {
    if (locked) return;
    locked = true;
    state.attempts += 1;
    var correct = choice === item.answer;
    if (correct) {
      state.correct += 1;
      state.wrong = state.wrong.filter(function (prompt) { return prompt !== item.prompt; });
      button.classList.add("correct");
      document.querySelector("[data-ko-feedback]").textContent = "答對了！" + item.note;
    } else {
      button.classList.add("wrong");
      if (state.wrong.indexOf(item.prompt) < 0) state.wrong.push(item.prompt);
      Array.from(document.querySelectorAll(".ko-choice")).forEach(function (choiceButton) {
        if (choiceButton.textContent === item.answer) choiceButton.classList.add("correct");
      });
      document.querySelector("[data-ko-feedback]").textContent = "正確答案：" + item.answer + "。" + item.note;
    }
    saveState();
  }

  function renderProgress() {
    var learned = state.learned.length;
    var quizScore = state.attempts ? Math.round((state.correct / state.attempts) * 100) : 0;
    var combined = Math.min(100, Math.round((learned / words.length) * 65 + (quizScore / 100) * 35));
    document.querySelector("[data-ko-progress]").style.width = combined + "%";
    document.querySelector("[data-ko-progress-text]").textContent = combined + "%";
    document.querySelector("[data-ko-learned-count]").textContent = learned + " / " + words.length;
    document.querySelector("[data-ko-score]").textContent = quizScore + "%";
    document.querySelector("[data-ko-streak]").textContent = state.streak + " 天";
    document.querySelector("[data-ko-wrong-count]").textContent = state.wrong.length;
  }

  function activatePanel(name) {
    document.querySelectorAll("[data-ko-panel]").forEach(function (panel) {
      panel.hidden = panel.dataset.koPanel !== name;
    });
    document.querySelectorAll("[data-ko-tab]").forEach(function (button) {
      button.setAttribute("aria-selected", button.dataset.koTab === name ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-ko-tab]").forEach(function (button) {
    button.addEventListener("click", function () { activatePanel(button.dataset.koTab); });
  });

  document.querySelectorAll("[data-ko-speak]").forEach(function (button) {
    button.addEventListener("click", function () { speak(button.dataset.koSpeak); });
  });

  document.querySelector("[data-ko-prev]").addEventListener("click", function () {
    state.flashIndex = (state.flashIndex - 1 + words.length) % words.length;
    saveState(); renderFlash();
  });
  document.querySelector("[data-ko-next]").addEventListener("click", function () {
    state.flashIndex = (state.flashIndex + 1) % words.length;
    saveState(); renderFlash();
  });
  document.querySelector("[data-ko-flash-speak]").addEventListener("click", function () {
    speak(words[state.flashIndex % words.length].ko);
  });
  document.querySelector("[data-ko-learned]").addEventListener("click", function () {
    var word = words[state.flashIndex % words.length].ko;
    var index = state.learned.indexOf(word);
    if (index >= 0) state.learned.splice(index, 1); else state.learned.push(word);
    saveState(); renderFlash();
  });
  document.querySelector("[data-ko-next-question]").addEventListener("click", function () {
    currentQuestion = (currentQuestion + 1) % quiz.length;
    renderQuiz();
  });
  document.querySelector("[data-ko-review-wrong]").addEventListener("click", function () {
    if (!state.wrong.length) {
      document.querySelector("[data-ko-feedback]").textContent = "目前沒有錯題，繼續保持！";
      return;
    }
    var prompt = state.wrong[0];
    var index = quiz.findIndex(function (item) { return item.prompt === prompt; });
    currentQuestion = index >= 0 ? index : 0;
    renderQuiz();
  });
  document.querySelector("[data-ko-reset]").addEventListener("click", function () {
    if (!window.confirm("確定清除這台裝置上的韓語學習進度嗎？")) return;
    state = Object.assign({}, initial, { learned: [], wrong: [] });
    saveState(); renderFlash(); renderQuiz();
  });

  renderLetters(document.querySelector("[data-ko-consonants]"), consonants);
  renderLetters(document.querySelector("[data-ko-vowels]"), vowels);
  markDailyUse();
  renderFlash();
  renderQuiz();
  renderProgress();
})();
