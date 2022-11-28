class CheckoutPage {
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
}

export default new CheckoutPage();