import LoginPage from  "../pageobjects/login.page";
import InventoryPage from  "../pageobjects/inventory.page";

describe("My Login application", () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/")
    })

    it("Should not login with empty credentials", async () => {
        await LoginPage.login("","");
        await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username is required");
        await browser.refresh();
    });

    it("Should not login without password", async () => {
        await LoginPage.login("standard_user","");
        await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
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

    it("Should not login valid (standard) user, but empty password", async () => {
        await LoginPage.login("standard_user","");
        await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it("Should not login with valid (standard) user, but wrong password", async () => {
        await LoginPage.login("standard_user","wrongpassword");
        await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await browser.refresh();
    });

    it("Should login with valid (standard) user", async () => {
        await LoginPage.login("standard_user","secret_sauce");
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(InventoryPage.productImage).toHaveAttr("src", "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");
        await InventoryPage.humburguerMenu.waitForDisplayed({timeout: 1000});
        await expect(InventoryPage.humburguerMenu).toBeDisplayed();
        await InventoryPage.humburguerMenu.click();
        await expect(InventoryPage.logoutBtn).toBeDisplayed();
        await InventoryPage.logoutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await LoginPage.botImage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png');
        await browser.refresh();
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

// await expect(LoginPage.humburguerMenu).toBeDisplayed({timeout: 5000});

// await LoginPage.errorMesg.waitForDisplayed({timeout: 10000});
// await browser.pause(800)