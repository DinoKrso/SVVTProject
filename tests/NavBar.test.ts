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
    await driver.sleep(2000);
    await homePage.clickMenuElement();
    await driver.sleep(2000);
    const pageTitle = await driver.getTitle();
    expect(pageTitle).toEqual("Shop - Dev's Hideout");

    await homePage.clickNavigationBarLink1();
    await driver.sleep(2000);
    const pageAbout = await driver.getTitle();
    expect(pageAbout).toEqual("About - Dev's Hideout");

    await homePage.clickNavigationBarLink2();
    await driver.sleep(2000);
    const pageContact = await driver.getTitle();
    expect(pageContact).toEqual("Contact - Dev's Hideout");
    await homePage.hoverOverNavigationBarElement();
    await homePage.clickNavigationBarSubLink()
  },25000);
});