import { Builder, By, WebDriver } from "selenium-webdriver";
import HomePage from "../core/page-objects/HomePage";
import Page from "../core/page-objects/Page";
import { createDriver, quitDriver } from "../core/config/driver-setup";

describe("Dev's Hideout Tests", () => {
  let driver: WebDriver;
  let page: Page;
  let homePage: HomePage;

  beforeAll(async () => {
    driver = await createDriver();
    page = new Page(driver);
    homePage = new HomePage(driver);
  }, 30000);

  afterAll(async () => {
    await quitDriver(driver);
  }, 5000);

  test("Add Product To Cart", async () => {
    await page.open();
    await homePage.clickFirstElement();
    await homePage.clickThirdElement();
    await homePage.hoverOverImageAndClickColorOption();
    await homePage.chooseSizeL();
    await homePage.clickAddToCartButton();
    await driver.sleep(2000);
    const messageElement = await driver.findElement(By.xpath('//*[@id="main"]//div//div[1]//div//a'));
    const messageText = await messageElement.getText();
    expect(messageText).toEqual("VIEW CART");
  },25000);
});
