import LoginPage from  "../pageobjects/login.page";
import InventoryPage from  "../pageobjects/inventory.page";
import CartPage from  "../pageobjects/cart.page";
import CheckoutPage from "../pageobjects/checkout.page";


describe("Purchase process", () => {
  beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("Should login", async () => {
    await LoginPage.login("standard_user","secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(InventoryPage.productImage).toHaveAttr("src", "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");
    await expect(InventoryPage.appLogo).toBeDisplayed();
    await expect(InventoryPage.cartLogo).toBeDisplayed();
  });

  it ("Should add product to cart", async() => {
    await expect(InventoryPage.addToCartBagBtn).toBeDisplayed();
    await InventoryPage.addToCartBagBtn.click();
    await InventoryPage.cartLogo.click();
    await CartPage.checkOutBtn.waitForDisplayed({timeout: 1000});
    await expect(CartPage.bagProductDescription).toHaveTextContaining("carry.allTheThings() with the sleek");
  });

  it ("Should checkout the product", async() => {
    await CartPage.checkOutBtn.click();
    await expect(CheckoutPage.checkoutForm).toBeDisplayed();
    await CheckoutPage.checkout("anyname","anyLastName","33162");
    await expect(CheckoutPage.bagPrice).toHaveTextContaining("29.99");
    await expect(CheckoutPage.bagProductDescription).toHaveTextContaining("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    await CheckoutPage.finishBtn.waitForDisplayed({timeout: 1000});
    await CheckoutPage.finishBtn.click();
    await expect(CheckoutPage.ponyImg).toHaveAttr("src","https://www.saucedemo.com/static/media/pony-express.46394a5d.png");
  });

  it ("Should comeback to homepage", async() => {
    await CheckoutPage.backHomeBtn.waitForDisplayed({timeout: 1000});
    await CheckoutPage.backHomeBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  });

  it ("Should logout", async() => {
    await InventoryPage.humburguerMenu.waitForDisplayed({timeout: 1000});
    await InventoryPage.humburguerMenu.click();
    await expect(InventoryPage.logoutBtn).toBeDisplayed({timeout: 1000});
    await InventoryPage.logoutBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
});
