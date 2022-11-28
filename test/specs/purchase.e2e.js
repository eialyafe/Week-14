import InventoryPage from  "../pageobjects/inventory.page";

describe("Standard user login", () => {
  beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("Should login with standard user", async () => {
    await LoginPage.login("standard_user","secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(InventoryPage.productImage).toHaveAttr("src", "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");
    await expect(InventoryPage.appLogo).toBeDisplayed();
    await expect(InventoryPage.cartLogo).toBeDisplayed();
    await expect(InventoryPage.addToCartBagBtn).toBeDisplayed();
    await InventoryPage.addToCartBagBtn.click();
    await browser.refresh();
  });

  it ("Should add product to cart",)
  
});