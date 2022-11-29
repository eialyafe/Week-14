class CheckoutPage {
	get checkoutForm () {
		return $("#checkout_info_container");
	}

	get inputFirstName () {
		return $("#first-name");
	}

	get inputLastName () {
		return $("#last-name");
	}

	get inputZip () {
		return $("#postal-code");
	}

	get continueBtn () {
		return $("#continue");
	}

	get cancelBtn () {
		return $("#cancel");
	}

	get bagPrice () {
		return $("#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div");
	}

	get bagProductDescription () {
    return $(".inventory_item_desc");
	}

	get finishBtn () {
		return $("#finish");
	}

	get ponyImg () {
		return $(".pony_express");
	}

	get backHomeBtn () {
		return $("#back-to-products");
	}

	async checkout (firstName, lastName,zip) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
		await this.inputZip.setValue(zip);
    await this.continueBtn.click();
  }
}
export default new CheckoutPage();