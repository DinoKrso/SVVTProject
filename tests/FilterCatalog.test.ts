// tests/testScript.ts
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

  test("Remove Product", async () => {
    await page.open();

   
    // Click on the first element
    await homePage.clickFirstElement();
    await homePage.clickCategoryLink();
    await driver.sleep(2000) ; 
    const pageTitle = await driver.getTitle();
    expect(pageTitle).toEqual("Tshirts - Dev's Hideout");
  },25000);
});
