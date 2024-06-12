const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const mainPage = require('../pageobjects/MainPage');

Given('User is located on the main page of saucedemo website', async () => {
    await mainPage.open()
    
});

When('User clicks "login-button" button', async () => {
    await mainPage.login()
});

Then('User should see {string} error message', async (string) => {
    (await mainPage.errMsg).waitForDisplayed();
    const errMsgText = await mainPage.errMsgText();
    await expect(errMsgText).toBe(string);
});

