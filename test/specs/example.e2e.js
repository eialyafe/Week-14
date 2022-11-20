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

    it("Should not login with wrong password", async () => {
        await LoginPage.login("standard_user","wrongpassword");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("Should login with valid credentials", async () => {
        await LoginPage.login("standard_user","secret_sauce");
        await expect(LoginPage.botImage).toBeDisplayed();
        await expect(LoginPage.errorMesg).toBeDisplayed();
        await expect(LoginPage.errorMesg).toHaveText("Epic sadface: Username and password do not match any user in this service")
    });
});


// await expect(SecurePage.flashAlert).toBeExisting();
// await expect(SecurePage.flashAlert).toHaveTextContaining(
//     'You logged into a secure area!');


// await LoginPage.errorMesg.waitForDisplayed({timeout: 10000});
// await browser.pause(800);
