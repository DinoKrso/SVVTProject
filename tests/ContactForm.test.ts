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

  test("Test navigation bar interactions with additional steps", async () => {
    await page.open();
    // Click on the second navigation bar link
    await homePage.clickNavigationBarLink2();
     // Locate and insert the email
     await homePage.enterEmail("test@ibu.edu.ba");
     await driver.sleep(2000);

     // Locate and insert the subject
     await homePage.enterSubject("Product damage");
     await driver.sleep(2000);

     // Locate and insert the message
     await homePage.enterMessage("Wrong size of my order");
    await driver.sleep(2000);
     // Click on the submit button
     await homePage.clickSubmitButton();
 

   

    // Add any necessary assertions or further actions after these interactions
  },25000);
});
