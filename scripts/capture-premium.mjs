import { chromium } from "playwright";
import { mkdir, readdir, copyFile, rm } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.FORMA_URL || "http://127.0.0.1:4322";
const OUT = process.env.FORMA_MEDIA_DIR;
if (!OUT) {
  console.error("Set FORMA_MEDIA_DIR");
  process.exit(1);
}
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  recordVideo: { dir: path.join(OUT, "_video-tmp-premium"), size: { width: 1440, height: 900 } },
});
const page = await context.newPage();

async function shot(name, url, opts = {}) {
  await page.goto(new URL(url, BASE).toString(), { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  if (opts.scroll) {
    await page.evaluate(async () => {
      const step = Math.round(window.innerHeight * 0.55);
      const max = Math.min(document.body.scrollHeight, window.innerHeight * 6);
      for (let y = 0; y <= max; y += step) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 220));
      }
    });
  }
  await page.screenshot({
    path: path.join(OUT, name),
    fullPage: Boolean(opts.fullPage),
  });
  console.log("wrote", name);
}

await shot("forma-premium-01-hero.png", "/");
await shot("forma-premium-02-sticky-work.png", "/", { scroll: true });
await shot("forma-premium-03-work.png", "/work/");
await shot("forma-premium-04-case.png", "/work/north-ledger/");
await shot("forma-premium-05-services.png", "/services/");
await shot("forma-premium-06-contact.png", "/contact/");

const mobile = await browser.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto(`${BASE}/`, { waitUntil: "networkidle" });
await mobile.waitForTimeout(700);
await mobile.screenshot({ path: path.join(OUT, "forma-premium-07-mobile.png") });
console.log("wrote forma-premium-07-mobile.png");
await mobile.close();

const clip = await context.newPage();
await clip.goto(`${BASE}/`, { waitUntil: "networkidle" });
await clip.waitForTimeout(500);
await clip.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.5);
  const max = Math.min(document.body.scrollHeight, window.innerHeight * 5.5);
  for (let y = 0; y <= max; y += step) {
    window.scrollTo({ top: y, behavior: "smooth" });
    await new Promise((r) => setTimeout(r, 480));
  }
});
await clip.waitForTimeout(700);

await context.close();
await browser.close();

const tmp = path.join(OUT, "_video-tmp-premium");
const files = await readdir(tmp);
const webm = files.find((f) => f.endsWith(".webm"));
if (webm) {
  await copyFile(path.join(tmp, webm), path.join(OUT, "forma-premium-hero-scroll.webm"));
  console.log("wrote forma-premium-hero-scroll.webm");
}
await rm(tmp, { recursive: true, force: true });
console.log("done");
