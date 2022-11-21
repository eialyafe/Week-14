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
    });

    it("Should not login without password", async () => {
        await LoginPage.login("standard_user","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
    });


    it("Should not login with wrong user and without password", async () => {
        await LoginPage.login("wrongUser","");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Password is required");
    });

    it("Should not login without username and wrong password", async () => {
        await LoginPage.login("","invalid");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username is required");
    });

    it("Should not login with wrong password", async () => {
        await LoginPage.login("standard_user","wrongpassword");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("Should login with valid credentials", async () => {
        await LoginPage.login("standard_user","secret_sauce");
        await browser.url("https://www.saucedemo.com/inventory.html");
        await expect(LoginPage.humburguerMenu).toBeDisplayed();
        await LoginPage.humburguerMenu.click();
        await expect(LoginPage.logoutBtn).toBeDisplayed();
        await browser.pause(1000);
        await LoginPage.logoutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.botImage).toBeDisplayed();
    });

    it("Should not login user canceled", async () => {
        await LoginPage.login("locked_out_user","secret_sauce");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    });
});

// await expect(LoginPage.humburguerMenu).toBeDisplayed({timeout: 5000});

// await LoginPage.errorMesg.waitForDisplayed({timeout: 10000});
// await browser.pause(800)