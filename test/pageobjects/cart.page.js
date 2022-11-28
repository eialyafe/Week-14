class CartPage {
	get bagProductDescription () {
    return $(".inventory_item_desc");
  }

	get checkOutBtn () {
    return $("#checkout");
  }
}

export default new CartPage();