Feature: Login functionality on SauceDemo

  Scenario: Unsuccessful login without username
    Given User is located on the main page of saucedemo website
    When User clicks "login-button" button
    Then User should see 'Epic sadface: Username is required' error message
