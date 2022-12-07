const { test, expect } = require('@playwright/test');


test.describe("Example", () => {
    test.use({

        viewport: { width: 600, height: 900 },

    })

    test("Testing Selectors", async ({ page }) => {

        //test.setTimeout(5000)

        await page.goto("https://demoqa.com/text-box");
        await expect(page).toHaveTitle("ToolsQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box");

        //const test = page.locator('#currentAddress');
        //expect(test).toContainText()
        await page.locator('#userName').type("Test Username");
        await page.locator('[placeholder="name@example.com"]').type("testemail@test.com");
        await page.locator('#currentAddress').type("This is the current address");
        await page.locator('#permanentAddress').type("This is a permanent address");
        await page.locator('button:has-text("Submit")').click();
        //await page.pause();
        await page.goto("https://demoqa.com/checkbox");
        await page.locator('//span[@class="rct-checkbox"]').setChecked(true);
        await page.pause();
        //await page.goto("https://demoqa.com/text-box");
        //const name = page.locator('#name');
        //const email = page.locator('#email');
        //const currentAddress = page.locator('#currentAddress');
        //const permanentAddress = page.locator('#permanentAddress');

        //await expect(name).toBeVisible();
        //await expect(name).toHaveText('Name:Test Username');
        //await expect(email).toBeVisible();
        //await expect(email).toHaveText('Email:testemail@test.com'); 
        //await expect(currentAddress).toBeVisible();
        //await expect(currentAddress).toHaveText('Current Address:This is the current address');
        //await expect(permanentAddress).toBeVisible();
        //await expect(permanentAddress).toHaveText('Permanent Address:This is a permanent address');
    })
})