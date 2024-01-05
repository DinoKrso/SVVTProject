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
    //const isSomeElementDisplayed = await homePage.isSomeElementDisplayed();
    //expect(isSomeElementDisplayed).toBeTruthy();

    // Click on the first element
    await homePage.clickFirstElement();

    // Click on the third element
    await homePage.clickThirdElement();
    await driver.sleep(2000);
    // Hover over the image and click the color option
    await homePage.hoverOverImageAndClickColorOption();
    await driver.sleep(2000);

    // Click on the size dropdown and choose 'L'
    await homePage.chooseSizeL();
    await driver.sleep(2000);

    // Add assertions or further actions after performing these interactions if needed
  },25000);
});
