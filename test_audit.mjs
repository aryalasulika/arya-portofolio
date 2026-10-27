import puppeteer from "puppeteer-core";

const VIEWPORTS = [
  { name: "Mobile Small", width: 320, height: 640 },
  { name: "Mobile Medium", width: 375, height: 667 },
  { name: "Mobile Standard", width: 390, height: 844 },
  { name: "Mobile Large", width: 430, height: 932 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Laptop", width: 1024, height: 768 },
  { name: "Desktop", width: 1440, height: 900 },
];

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runAudit() {
  console.log("Starting Responsive Viewport Audit...");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  const results = [];

  for (const vp of VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    // Check document scrollWidth vs clientWidth
    const layoutMetrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
      const clientWidth = doc.clientWidth;
      const innerWidth = window.innerWidth;

      // Find overflowing elements if any
      const overflowingElements = [];
      const allEls = document.querySelectorAll("*");
      for (const el of allEls) {
        const rect = el.getBoundingClientRect();
        if (rect.right > innerWidth + 1) {
          overflowingElements.push({
            tag: el.tagName.toLowerCase(),
            id: el.id,
            className: el.className?.toString().slice(0, 50),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          });
        }
      }

      // Check key sections
      const sections = {
        hero: !!document.querySelector("#home"),
        projects: !!document.querySelector("#projects"),
        about: !!document.querySelector("#about"),
        skills: !!document.querySelector("#skills"),
        experience: !!document.querySelector("#experience"),
        contact: !!document.querySelector("#contact"),
        footer: !!document.querySelector("footer"),
      };

      return {
        hasOverflow: scrollWidth > innerWidth,
        scrollWidth,
        clientWidth,
        innerWidth,
        overflowCount: overflowingElements.length,
        overflowSamples: overflowingElements.slice(0, 3),
        sections,
      };
    });

    // Test mobile hamburger menu if on mobile (< 768px)
    let mobileMenuPassed = true;
    if (vp.width < 768) {
      try {
        const menuButton = await page.$('button[aria-label*="menu" i]');
        if (menuButton) {
          await menuButton.click();
          await new Promise((r) => setTimeout(r, 250));
          const drawerOpen = await page.evaluate(
            () => !!document.querySelector('[role="dialog"]')
          );
          if (!drawerOpen) mobileMenuPassed = false;
          // Close drawer
          await menuButton.click();
          await new Promise((r) => setTimeout(r, 200));
        }
      } catch (err) {
        mobileMenuPassed = false;
      }
    }

    results.push({
      viewport: `${vp.name} (${vp.width}x${vp.height})`,
      width: vp.width,
      hasOverflow: layoutMetrics.hasOverflow,
      scrollWidth: layoutMetrics.scrollWidth,
      innerWidth: layoutMetrics.innerWidth,
      overflowCount: layoutMetrics.overflowCount,
      sectionsValid: Object.values(layoutMetrics.sections).every(Boolean),
      mobileMenuPassed: vp.width < 768 ? mobileMenuPassed : "N/A (Desktop)",
    });
  }

  await browser.close();
  console.log("=== AUDIT RESULTS ===");
  console.log(JSON.stringify(results, null, 2));
}

runAudit().catch(console.error);
