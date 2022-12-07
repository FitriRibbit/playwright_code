const { test, expect } = require('@playwright/test');

test.describe("Authentication", () => {
    test.use({
        storageState: 'auth.json'
    });
    
    //test.beforeEach(async ({ page }) => {
      //  await page.goto('https://parabank.parasoft.com');
    //})

    test.beforeEach( async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('fitri');
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="password"]').fill('120792');
        await page.getByRole('button', { name: 'Log In' }).click();
        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');
    });
    test("Test 2", async ({ page }) => {
        await page.getByRole('link', { name: 'Transfer Funds' }).click();
        //await page.waitForURL('https://parabank.parasoft.com/parabank/transfer.htm');

    })
    test("Test 3", async ({ page }) => {
        await page.getByRole('link', { name: 'Bill Pay' }).click();
        //await page.waitForURL('https://parabank.parasoft.com/parabank/billpay.htm');

    })
})