// tests/testScript.ts
import { Builder, WebDriver } from "selenium-webdriver";
import HomePage from "../core/page-objects/HomePage";
import Page from "../core/page-objects/Page";
import { createDriver, quitDriver } from "../core/config/driver-setup";

describe("Your Test Suite", () => {
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

  test("Admin Log In", async () => {
    await page.open();

    await homePage.hoverOverNavigationBarElement();
    await homePage.clickAdditionalSubLink();
    await homePage.enterUsername("test@ibu.edu.ba");
    await homePage.enterPassword("pass123");
    await driver.sleep(2000);

    await homePage.clickLoginButton();
    await driver.sleep(2000);
  },25000);
});
