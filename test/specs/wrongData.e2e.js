import LoginPage from  "../pageobjects/login.page";

describe("My Login application", () => {
  beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/")
  });

  it("Should not login with empty credentials", async () => {
    await LoginPage.login("","");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username is required");
    await browser.refresh();
  });

  it("Should not login with wrong user and without password", async () => {
    await LoginPage.login("wrongUser","");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
    await browser.refresh();
  });

  it("Should not login without username and wrong password", async () => {
    await LoginPage.login("","invalid");
    await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
    await expect(LoginPage.errorMesg).toBeDisplayed();
    await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username is required");
    await browser.refresh();
  });
});