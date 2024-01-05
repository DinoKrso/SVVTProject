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

  test("Load the page and click elements", async () => {
    await page.open();
    //const isSomeElementDisplayed = await homePage.isSomeElementDisplayed();
    //expect(isSomeElementDisplayed).toBeTruthy();
    await driver.sleep(2000);
    // Click on the menu element
    await homePage.clickMenuElement();
    await driver.sleep(2000);
    // Click on the second element
    await homePage.clickSecondElement();

    // Add assertions or further actions after clicking the second element if needed
  },25000);
});

