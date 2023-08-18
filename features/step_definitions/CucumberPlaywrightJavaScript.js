// features/step_definitions/ - where your step definition files (JavaScript code that gives your Gherkin steps functionality) will be located.
// Based on the steps you've defined in your .feature file, you'll need to provide the JavaScript implementation in a file inside features/step_definitions/.
// npx cucumber-js

const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const { firefox, webkit, chromium } = require('playwright');
const { After } = require('@cucumber/cucumber');
let browser;
let page;

Given('I navigate to Google\'s homepage', async function () {
    browser = await chromium.launch();  // Or firefox, webkit, depending on which browser you want
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.google.com');
 });
 

When('I accept the disclaimer or cookies notification', async function () {
  await page.click('//*[@id="L2AGLb"]/div');
});

When('I click on the {string} button', async function (buttonName) {
  if (buttonName === "I'm Feeling Lucky") {
    await page.click('//html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[2]');
  }
  // Add other button interactions if needed
});

When('I click on an item from the archive list', async function () {
  await page.click('//*[@id="archive-list"]/li[1]/div[1]/div[2]/div[2]/a');
});

Then('I should be able to return to the previous page', async function () {
  await page.goBack();
});

After(async function() {
    await browser.close();
});