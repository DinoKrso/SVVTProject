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



    // Hover over the navigation bar element
    await homePage.hoverOverNavigationBarElement();


    // Click on the additional sub-link
    await homePage.clickAdditionalSubLink();

    // Locate and enter the username
    await homePage.enterUsername("test@ibu.edu.ba");

    // Locate and enter the password
    await homePage.enterPassword("pass123");
    await driver.sleep(2000);

    // Click on the login button
    await homePage.clickLoginButton();
    await driver.sleep(2000);

    // Add any necessary assertions or further actions after these interactions
  },25000);
});
