/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage  {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("#user-name");
    }

    get inputPassword () {
        return $("#password");
    }

    get btnLogin () {
        return $("#login-button");
    }

    get errorMesg () {
      return $("#login_button_container > div > form > div.error-message-container.error > h3");
  }

  get botImage () {
    return $("#root > div > div.login_wrapper > div.login_wrapper-inner > div.bot_column")
  }

  get humburguerMenu () {
    return $("#react-burger-menu-btn")
  }

  get logoutBtn () {
    return $("#logout_sidebar_link")
  }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
