const { Builder, By, Browser, until } = require("selenium-webdriver");

describe("Image cycle", () => {
  let driver;

  beforeAll(async () => {
    try {
      driver = await new Builder().forBrowser(Browser.CHROME).build();
    } catch (error) {
      console.error("Error setting up the driver:", error);
    }
  }, 10000);

  afterAll(async () => {
    try {
      await driver.quit();
    } catch (error) {
      console.error("Error quitting the driver:", error);
    }
  }, 10000);

  test("Upload image", async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.name("title")).sendKeys("Test title");
    await driver
      .findElement(By.name("description"))
      .sendKeys("Test description");

    let testImage = process.cwd() + "/src/public/img/imgshare-logo.png";
    await driver.findElement(By.name("image")).sendKeys(testImage);
    await driver.findElement(By.className("btn-success")).click();
    expect(true).toBe(true);
  }, 10000);

  test("likeImage", async () => {
    const likes = await driver
      .findElement(By.className("likes-count"))
      .getText();

    await driver.findElement(By.id("btn-like")).click();

    await driver
      .findElement(By.className("likes-count"))
      .getText()
      .then((text) => {
        expect(parseInt(text)).toBe(parseInt(likes) + 1);
      });
  });

  test("commentImage", async () => {
    const numberOfComments = await driver.findElements(
      By.className("list-group-item")
    );

    await driver.findElement(By.id("btn-toggle-comment")).click();

    const commentButton = driver.findElement(By.id("btn-comment"));
    await driver.wait(until.elementIsVisible(commentButton), 1000);
    await driver.wait(until.elementIsEnabled(commentButton), 1000);

    await commentButton.submit();

    const comments = await driver.findElements(By.className("list-group-item"));
    expect(comments.length).toBe(numberOfComments.length + 1);
  }, 10000);

  test("Delete image", async () => {
    await driver.findElement(By.id("btn-delete")).click();

    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();

    expect(true).toBe(true);
  });
});
