import LoginPage from  "../pageobjects/login.page";
import InventoryPage from  "../pageobjects/inventory.page";

describe("Standard user login", () => {
  beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("Should not login with (performance) user, and empty password", async () => {
    await LoginPage.login("performance_glitch_user","");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
    await browser.refresh();
});

  it("Should not login with (performance) user, and wrong password", async () => {
    await LoginPage.login("performance_glitch_user","wrongPassword");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    await browser.refresh();
  });

  it("Should login with valid (performance) user", async () => {
    await LoginPage.login("performance_glitch_user","secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(InventoryPage.productImage).toHaveAttr("src", "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");
    await InventoryPage.humburguerMenu.waitForDisplayed({timeout: 4000});
    await expect(InventoryPage.humburguerMenu).toBeDisplayed();
    await InventoryPage.humburguerMenu.click();
    await InventoryPage.logoutBtn.waitForDisplayed({timeout: 2000});
    await expect(InventoryPage.logoutBtn).toBeDisplayed();
    await InventoryPage.logoutBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await browser.refresh();
  });
});