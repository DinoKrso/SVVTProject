// core/page-objects/HomePage.ts
import { By, WebDriver, until } from "selenium-webdriver";
import Page from "./Page";

class HomePage extends Page {
  private someElementLocator = By.css("some-css-selector"); // Replace with actual selector
  private menuElementLocator = By.xpath('//*[@id="menu-item-406"]//a');
  private navigationBarLink1Locator = By.xpath('//*[@id="menu-item-344"]//a');
  private navigationBarLink2Locator = By.xpath('//*[@id="menu-item-337"]//a');
  private navigationBarHoverElementLocator = By.xpath('//*[@id="menu-item-470"]');
  private navigationBarSubLinkLocator = By.xpath('//*[@id="menu-item-471"]');
  private additionalSubLinkLocator = By.xpath('//*[@id="menu-item-472"]//a');
  private usernameLocator = By.xpath('//*[@id="username"]');
  private passwordLocator = By.xpath('//*[@id="password"]');
  private loginButtonLocator = By.xpath('//*[@id="post-99"]//div//div//form//p[3]//button');
  private secondElementLocator = By.xpath('//*[@id="main"]//div//ul//li[1]//div[2]//a');
  private firstElementLocator = By.xpath('//*[@id="post-95"]//div//div//section[1]//div[3]//div//div//div[5]//div//div//a');
  private thirdElementLocator = By.xpath('//*[@id="main"]//div//ul//li[3]//div[2]//a');
  private imageLocator = By.xpath('//*[@id="product-3835"]//div[1]//div//figure//div[1]//a');
  private colorDropdownLocator = By.xpath('//*[@id="pa_color"]');
  private sizeDropdownLocator = By.xpath('//*[@id="pa_size"]');
  private addToCartButtonLocator = By.xpath('//*[@id="product-3835"]//div[2]//form//div//div[2]//button');
  private additionalLinkLocator = By.xpath('//*[@id="main"]//div//div[1]//div//a');
  private postLinkLocator = By.xpath('//*[@id="post-97"]//div//div//form//table//tbody//tr[1]//td[1]//a');
  private categoryLinkLocator = By.xpath('//*[@id="woocommerce_product_categories-4"]//ul//li[6]//a');
  private emailFieldLocator = By.xpath('//*[@id="wpforms-2477-field_1"]');
  private subjectFieldLocator = By.xpath('//*[@id="wpforms-2477-field_3"]');
  private messageFieldLocator = By.xpath('//*[@id="wpforms-2477-field_2"]');
  private submitButtonLocator = By.xpath('//*[@id="wpforms-submit-2477"]');
  private sizeGuideLocator = By.xpath('//*[@id="product-3835"]//div[2]//form//div//a');

  constructor(driver: WebDriver) {
    super(driver);
  }

  async isSomeElementDisplayed() {
    const someElement = await this.driver.findElement(this.someElementLocator);
    return someElement.isDisplayed();
  }

  async clickMenuElement() {
    const menuElement = await this.driver.findElement(this.menuElementLocator);
    await menuElement.click();
  }

  async clickSecondElement() {
    const secondElement = await this.driver.findElement(this.secondElementLocator);
    await secondElement.click();
  }
  async clickFirstElement() {
    const firstElement = await this.driver.findElement(this.firstElementLocator);
    await firstElement.click();
  }

  async clickThirdElement() {
    const thirdElement = await this.driver.findElement(this.thirdElementLocator);
    await thirdElement.click();
  }

  async hoverOverImageAndClickColorOption() {
    const imageElement = await this.driver.findElement(this.imageLocator);
    const colorDropdown = await this.driver.findElement(this.colorDropdownLocator);

    // Hover over the image
    await this.driver.actions({ bridge: true }).move({ duration: 5000, origin: imageElement, x: 0, y: 0 }).perform();

    // Wait for the color dropdown to be clickable
    await this.driver.wait(until.elementIsEnabled(colorDropdown));

    // Click 'Black' option in the color dropdown
    await colorDropdown.click();
      // Choose 'L' from the dropdown (replace with the actual selector for 'L')
      const sizeOptionBlack = By.xpath('//*[@id="pa_color"]/option[text()="Black"]');
      await this.driver.findElement(sizeOptionBlack).click();
  }
  async chooseSizeL() {
    const sizeDropdown = await this.driver.findElement(this.sizeDropdownLocator);

    // Wait for the size dropdown to be clickable
    await this.driver.wait(until.elementIsEnabled(sizeDropdown));

    // Click on the size dropdown
    await sizeDropdown.click();

    // Choose 'L' from the dropdown (replace with the actual selector for 'L')
    const sizeOptionL = By.xpath('//*[@id="pa_size"]/option[text()="L"]');
    await this.driver.findElement(sizeOptionL).click();
  }
  async clickAddToCartButton() {
    const addToCartButton = await this.driver.findElement(this.addToCartButtonLocator);

    // Wait for the button to be clickable
    await this.driver.wait(until.elementIsEnabled(addToCartButton));

    // Click on the "Add to Cart" button
    await addToCartButton.click();
  }
  async clickAdditionalLink() {
    const additionalLink = await this.driver.findElement(this.additionalLinkLocator);

    // Wait for the link to be clickable
    await this.driver.wait(until.elementIsEnabled(additionalLink));

    // Click on the additional link
    await additionalLink.click();
  }

  async clickPostLink() {
    const postLink = await this.driver.findElement(this.postLinkLocator);

    // Wait for the link to be clickable
    await this.driver.wait(until.elementIsEnabled(postLink));

    // Click on the post link
    await postLink.click();
  }
  async clickCategoryLink() {
    const categoryLink = await this.driver.findElement(this.categoryLinkLocator);
    await categoryLink.click();
    // Add any necessary waits or checks after clicking the category link
  }
  async clickNavigationBarLink1() {
    const link1 = await this.driver.findElement(this.navigationBarLink1Locator);
    await link1.click();
    // Add any necessary waits or checks after clicking the link
  }

  async clickNavigationBarLink2() {
    const link2 = await this.driver.findElement(this.navigationBarLink2Locator);
    await link2.click();
    // Add any necessary waits or checks after clicking the link
  }

  async hoverOverNavigationBarElement() {
    const hoverElement = await this.driver.findElement(this.navigationBarHoverElementLocator);
    await this.driver.actions({ bridge: true }).move({ duration: 500, origin: hoverElement, x: 0, y: 0 }).perform();
    // Add any necessary waits or checks after hovering over the element
  }

  async clickNavigationBarSubLink() {
    const subLink = await this.driver.findElement(this.navigationBarSubLinkLocator);
    await subLink.click();
    // Add any necessary waits or checks after clicking the sub-link
  }
  async clickAdditionalSubLink() {
    const additionalSubLink = await this.driver.findElement(this.additionalSubLinkLocator);
    await additionalSubLink.click();
    // Add any necessary waits or checks after clicking the additional sub-link
  }

  async enterUsername(username: string) {
    const usernameElement = await this.driver.findElement(this.usernameLocator);
    await usernameElement.sendKeys(username);
    // Add any necessary waits or checks after entering the username
  }

  async enterPassword(password: string) {
    const passwordElement = await this.driver.findElement(this.passwordLocator);
    await passwordElement.sendKeys(password);
    // Add any necessary waits or checks after entering the password
  }

  async clickLoginButton() {
    const loginButton = await this.driver.findElement(this.loginButtonLocator);
    await loginButton.click();
    // Add any necessary waits or checks after clicking the login button
  }
  async enterEmail(email: string) {
    const emailField = await this.driver.findElement(this.emailFieldLocator);
    await emailField.sendKeys(email);
  }

  async enterSubject(subject: string) {
    const subjectField = await this.driver.findElement(this.subjectFieldLocator);
    await subjectField.sendKeys(subject);
  }

  async enterMessage(message: string) {
    const messageField = await this.driver.findElement(this.messageFieldLocator);
    await messageField.sendKeys(message);
  }

  async clickSubmitButton() {
    const submitButton = await this.driver.findElement(this.submitButtonLocator);
    await submitButton.click();
  }
  async clickSizeGuide() {
    const sizeGuideElement = await this.driver.findElement(this.sizeGuideLocator);
    await sizeGuideElement.click();
    // Add any necessary waits or checks after clicking the size guide
  }
}

export default HomePage;

