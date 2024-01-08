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

  test("Size Guide", async () => {
    await page.open();
    await homePage.clickFirstElement();
    await homePage.clickThirdElement();
    await driver.sleep(2000);
    await homePage.clickSizeGuide();
    await driver.sleep(2000);
    const messageElement = await driver.findElement(By.xpath('//html//body//div[4]//div//div[1]//h4'));
    const messageText = await messageElement.getText();
    expect(messageText).toEqual("Size guide");
  },25000);
});
