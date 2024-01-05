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

  test("Add Product To Cart", async () => {
    await page.open();
   

    // Click on the first element
    await homePage.clickFirstElement();

    // Click on the third element
    await homePage.clickThirdElement();
    await homePage.hoverOverImageAndClickColorOption();

    // Click on the size dropdown and choose 'L'
    await homePage.chooseSizeL();

    // Click on the "Add to Cart" button
    await homePage.clickAddToCartButton();
    await driver.sleep(2000);
    const messageElement = await driver.findElement(By.xpath('//*[@id="main"]//div//div[1]//div//a'));
    const messageText = await messageElement.getText();
    expect(messageText).toEqual("VIEW CART");
    // Add assertions or further actions after performing these interactions if needed
  },25000);
});
