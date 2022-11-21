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
}

export default new InventoryPage();