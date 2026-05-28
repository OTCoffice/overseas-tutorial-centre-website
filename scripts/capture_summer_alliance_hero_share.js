const { chromium } = require("playwright");
const path = require("path");

const shots = [
  {
    url: "http://127.0.0.1:4201/zh/summer-school-alliance/new-zealand/",
    out: path.resolve(
      __dirname,
      "../assets/social/new-zealand-summer-alliance-hero-share-20260528-v1.png",
    ),
  },
  {
    url: "http://127.0.0.1:4201/zh/summer-school-alliance/australia/",
    out: path.resolve(
      __dirname,
      "../assets/social/australia-summer-alliance-hero-share-20260528-v1.png",
    ),
  },
  {
    url: "http://127.0.0.1:4201/zh/summer-school-alliance/uk/",
    out: path.resolve(
      __dirname,
      "../assets/social/uk-summer-alliance-hero-share-20260528-v1.png",
    ),
  },
  {
    url: "http://127.0.0.1:4201/zh/summer-school-alliance/united-states/",
    out: path.resolve(
      __dirname,
      "../assets/social/us-summer-alliance-hero-share-20260528-v4.png",
    ),
  },
  {
    url: "http://127.0.0.1:4201/zh/summer-school-alliance/malaysia/",
    out: path.resolve(
      __dirname,
      "../assets/social/malaysia-summer-alliance-hero-share-20260528-v3.png",
    ),
  },
];

async function main() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  for (const shot of shots) {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    });
    await page.goto(shot.url, { waitUntil: "networkidle" });
    await page.screenshot({ path: shot.out });
    await page.close();
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
