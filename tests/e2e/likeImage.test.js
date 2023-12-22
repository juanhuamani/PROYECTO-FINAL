const { Builder, By, Browser, until } = require("selenium-webdriver");
const { imageId } = require("./e2e.consts.js");

describe("Image cycle", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("Upload image", async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.name("title")).sendKeys("Test title");
    await driver
      .findElement(By.name("description"))
      .sendKeys("Test description");

    let testImage = process.cwd() + "/src/public/img/imgshare-logo.png";
    await driver.findElement(By.name("image")).sendKeys(testImage);
    await driver.findElement(By.className("btn-success")).click();
  });

  test("likeImage", async () => {
    await driver.get(`http://localhost:3000/images/${imageId}`);

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
    await driver.get(`http://localhost:3000/images/${imageId}`);

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
  });

  test("Delete image", async () => {
    await driver.get(`http://localhost:3000/images/${imageId}`);
    await driver.findElement(By.id("btn-delete")).click();

    await driver.wait(until.alertIsPresent());
    await driver.switchTo().alert().accept();

    expect(true).toBe(true);
  });
});
