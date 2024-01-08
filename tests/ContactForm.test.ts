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
    await homePage.clickNavigationBarLink2();
    await homePage.enterEmail("test@ibu.edu.ba");
    await driver.sleep(2000);
    await homePage.enterSubject("Product damage");
    await driver.sleep(2000);
    await homePage.enterMessage("Wrong size of my order");
    await driver.sleep(2000);
    await homePage.clickSubmitButton();
 

   

  },25000);
});
