// tests/testScript.ts
import { Builder, WebDriver } from "selenium-webdriver";
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

  test("Load the page and perform additional interactions", async () => {
    await page.open();
    await homePage.clickFirstElement();
    await homePage.clickThirdElement();
    await driver.sleep(2000);
    await homePage.hoverOverImageAndClickColorOption();
    await driver.sleep(2000);
    await homePage.chooseSizeL();
    await driver.sleep(2000);
  },25000);
});
