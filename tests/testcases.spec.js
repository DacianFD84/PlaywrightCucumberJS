// npx playwright test --headed --workers=1 --project=chromium testcases.spec.js
const { test, expect } = require('@playwright/test');

test('First Playwright Test', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Assuming this is for accepting cookies or a disclaimer
  await page.click('//*[@id="L2AGLb"]/div');

  // Click on the "I'm Feeling Lucky" button
  await page.click('//html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[2]');

  // Click on another element
  await page.click('//*[@id="archive-list"]/li[1]/div[1]/div[2]/div[2]/a');

  // Go back to the previous page
  await page.goBack();

  // No need to close the browser when using @playwright/test
}, { timeout: 60000 });  // Set timeout to 60 seconds


    //await expect(page).toHaveTitle("Login | Coding for Kids")
    // page.locator('#login-email').type("naicadnirolf.uded@gmail.com");
    //await page.locator('#login-password').type("parola");
    //const button = await page.getByText('Login');
    //await page.locator('button:text("Login")');
    //await page.locator('button:text("Login")').click();
    //await expect(page).toHaveTitle("Acasă | Coding for Kids");
    // element = await page.$x('/html/body/section[1]/div/nav/div[2]/div');
    //if (element.length > 0) {
        // Dă clic pe primul element găsit
        //await element[0].click();
    //} else {
       // console.error('Elementul nu a fost găsit.');
   // }

