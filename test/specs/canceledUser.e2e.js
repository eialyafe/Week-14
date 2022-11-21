import LoginPage from  "../pageobjects/login.page";
import InventoryPage from  "../pageobjects/inventory.page";

describe("Canceled user login", () => {

  beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/")
  });

it("Should not login with (canceled) user, and empty password", async () => {
  await LoginPage.login("locked_out_user","");
  await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
  await expect(LoginPage.errorMesg).toBeDisplayed();
  await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
  await browser.refresh();
  });

it("Should not login with (canceled) user, and wrong password", async () => {
  await LoginPage.login("locked_out_user","wrongPassword");
  await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
  await expect(LoginPage.errorMesg).toBeDisplayed();
  await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
  await browser.refresh();
  });

it("Should not login with (canceled) user", async () => {
  await LoginPage.login("locked_out_user","secret_sauce");
  await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
  await expect(LoginPage.errorMesg).toBeDisplayed();
  await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  await browser.refresh();
  });
});