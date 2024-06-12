const { $ } = require('@wdio/globals')

class MainPage {
       
   get btnLogin() { return $('#login-button'); }
   get errMsg() { return $('h3[data-test="error"]'); }

   async errMsgText() {
       return (await this.errMsg).getText();
   }

   async open() {
       await browser.url('https://www.saucedemo.com/');
   }

   async login() {
       await this.btnLogin.click();
   }
}

module.exports = new MainPage();
