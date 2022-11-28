class InventoryPage {
  get productImage () {
    return $("#item_4_img_link > img")
  }

  get problemUserImage () {
    return $("#item_5_img_link > img")
  }

  get humburguerMenu () {
    return $("#react-burger-menu-btn")
  }

  get logoutBtn () {
    return $("#logout_sidebar_link")
  }

  get appLogo () {
    return $(".app_logo")
  }

  get cartLogo () {
    return $(".shopping_cart_link")
  }

  get addToCartBagBtn () {
    return $("#add-to-cart-sauce-labs-backpack")
  }
}
export default new InventoryPage();