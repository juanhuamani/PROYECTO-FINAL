// import chromedriver so that selenium can by itself open a chrome driver
require("chromedriver");

// import this class from selenium
const { Builder, Browser } = require("selenium-webdriver");

(async function openChromeTest() {
  // open chrome browser
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    await driver.get("http://127.0.0.1:3000");
  } finally {
    await driver.quit();
  }
})();
