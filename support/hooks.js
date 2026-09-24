const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

let browser;

BeforeAll(async function () {
  const localChrome = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const launchOptions = { headless: true };

  if (fs.existsSync(localChrome)) {
    launchOptions.executablePath = localChrome;
  }

  browser = await chromium.launch(launchOptions);
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});