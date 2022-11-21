import LoginPage from  "../pageobjects/login.page";

describe("My Login application", () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/")
    })

    it("Should not login with empty credentials", async () => {
        await LoginPage.login("","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username is required");
        await browser.refresh();
    });

    it("Should not login without password", async () => {
        await LoginPage.login("standard_user","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });


    it("Should not login with wrong user and without password", async () => {
        await LoginPage.login("wrongUser","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it("Should not login without username and wrong password", async () => {
        await LoginPage.login("","invalid");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username is required");
        await browser.refresh();
    });

    it("Should not login valid (standard) user, but empty password", async () => {
        await LoginPage.login("standard_user","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it("Should not login with valid (standard) user, but wrong password", async () => {
        await LoginPage.login("standard_user","wrongpassword");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await browser.refresh();
    });

    it("Should login with valid (standard) user", async () => {
        await LoginPage.login("standard_user","secret_sauce");
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await LoginPage.humburguerMenu.waitForDisplayed({timeout: 1000});
        await expect(LoginPage.humburguerMenu).toBeDisplayed();
        await LoginPage.humburguerMenu.click();
        await expect(LoginPage.logoutBtn).toBeDisplayed();
        await LoginPage.logoutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.botImage).toBeDisplayed();
        await browser.refresh();
    });

    it("Should not login with (canceled) user, and empty password", async () => {
        await LoginPage.login("locked_out_user","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it("Should not login with (canceled) user, and wrong password", async () => {
        await LoginPage.login("locked_out_user","wrongPassword");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await browser.refresh();
    });

    it("Should not login with (canceled) user", async () => {
        await LoginPage.login("locked_out_user","secret_sauce");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        await browser.refresh();
    });

    it("Should not login with (problem) user, and empty password", async () => {
        await LoginPage.login("problem_userr","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it("Should not login with (problem) user, and wrong password", async () => {
        await LoginPage.login("problem_userr","wrongPassword");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await browser.refresh();
    });

    // it("Should login with (problem) user", async () => {
    //     await LoginPage.login("problem_userr","secret_sauce");
    //     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    //     await LoginPage.humburguerMenu.waitForDisplayed({timeout: 30000});
    //     await expect(LoginPage.humburguerMenu).toBeDisplayed();
    //     await LoginPage.humburguerMenu.click();
    //     await expect(LoginPage.logoutBtn).toBeDisplayed();
    //     await browser.pause(1000);
    //     await LoginPage.logoutBtn.click();
    //     await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    //     await expect(LoginPage.botImage).toBeDisplayed();
    //     await browser.refresh();
    // });

    it("Should not login with (performance) user, and empty password", async () => {
        await LoginPage.login("performance_glitch_user","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
        await browser.refresh();
    });

    it("Should not login with (performance) user, and wrong password", async () => {
        await LoginPage.login("performance_glitch_user","wrongPassword");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        await browser.refresh();
    });

    it("Should login with valid (performance) user", async () => {
        await LoginPage.login("performance_glitch_user","secret_sauce");
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(LoginPage.humburguerMenu).toBeDisplayed();
        await LoginPage.humburguerMenu.click();
        await expect(LoginPage.logoutBtn).toBeDisplayed();
        await LoginPage.logoutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.botImage).toBeDisplayed();
        await browser.refresh();
    });

});

// await expect(LoginPage.humburguerMenu).toBeDisplayed({timeout: 5000});

// await LoginPage.errorMesg.waitForDisplayed({timeout: 10000});
// await browser.pause(800)