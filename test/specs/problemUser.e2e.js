import LoginPage from  "../pageobjects/login.page";
import InventoryPage from  "../pageobjects/inventory.page";

describe("Standard user login", () => {
  beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("Should not login with (problem) user, and empty password", async () => {
    await LoginPage.login("problem_userr","");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
    await browser.refresh();
  });

  it("Should not login with (problem) user, and wrong password", async () => {
    await LoginPage.login("problem_userr","wrongPassword");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    await browser.refresh();
  });

  it("Should login with (problem) user", async () => {
    await LoginPage.login("problem_user","secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(InventoryPage.problemUserImage).toHaveAttr("src", "/static/media/sl-404.168b1cce.jpg");
    await InventoryPage.humburguerMenu.waitForDisplayed({timeout: 10000});
    await expect(InventoryPage.humburguerMenu).toBeDisplayed();
    await InventoryPage.humburguerMenu.click();
    await expect(InventoryPage.logoutBtn).toBeDisplayed();
    await browser.pause(1000);
    await InventoryPage.logoutBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await browser.refresh();
  });
});