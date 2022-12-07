const { test, expect } = require('@playwright/test');

test.describe.parallel("Smoke Test", () => {
    //test.skip just will skip that test
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    })

    test.afterEach(async ({ page }) => {
        console.log("This test finished");
    })

    test.skip('First Test @test-regression', async ({ page }) => {
        //Write testing code here
        await page.goto("https://playwright.dev");
        //await page.pause();
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    })

    test.skip("Simple click test @regression-smoke", async ({ page, browserName }) => {
        //test.skip(browserName === 'firefox', 'working on the firefox fix');
        await page.goto("checkboxes");
        //await page.pause();
        //const element = page.locator("text=Add/Remove Elements");
        //const addElement = page.locator("text=Add Element");
        //await element.click();
        //await page.screenshot({path: "screenshot.png"});
        //await addElement.click();
    })

    //test.only just made you can run that test
    test.skip("Duplicate Test 1 @smoke", async ({ page }) => {
        await page.click("text=Add/Remove Elements");
        //const locator1 = page.locator("text=Add/Remove Elements")
        //await locator1.screenshot({path: "screenshot2.png"})
        //await page.screenshot();
        await page.click("text=Add Element");
    })

    test.skip("Duplicate Test 2 @regression", async ({ page }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })
    test.skip("Example 1", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
        await page.locator('input[type="checkbox"]').first().check();
        await page.locator('input[type="checkbox"]').last().uncheck();
        await page.pause();
    })

    test.skip("Example 2", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await page.locator('#column-a').dragTo(page.locator('#column-b'));
        //await page.locator('#column-b').dragTo(page.locator('#column-a'));
        await page.pause();
    })

    test.skip("Example 3", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await page.locator('#dropdown').selectOption({ label: 'Option 1' });
        //await expect(page.locator('#dropdown').toHaveValue('1'));
        await page.locator('#dropdown').selectOption({ label: 'Option 2' });
        //await expect(page.locator('#dropdown').toHaveValue('2'));

        await page.pause();
    })

    test.skip("Example 4", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/iframe');
        const frameTest = page.frameLocator('#mce_0_ifr').locator('html');
        await frameTest.click();
        await frameTest.type('This is my iframe position');
    })

    test.skip("Example 5", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download');
        const [download] = await Promise.all([
            // Start waiting for the download
            page.waitForEvent('download'),
            // Perform the action that initiates download
            page.locator('text=sample.pdf').click(),

        ]);
        const suggestFile = download.suggestedFilename();
        const filePath = 'download/' + suggestFile
        await download.saveAs(filePath);

        //await page.pause();
        // Wait for the download process to complete
        //const path = await download.path();
        //const url = download.url();
        //console.log(path);
        //console.log(url)

        // Save downloaded file somewhere
        await download.saveAs('/path/to/save/download/test.txt');
    })

    test.skip("Example 6", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        // Note that Promise.all prevents a race condition
        // between clicking and waiting for the file chooser.
        const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            page.waitForEvent('filechooser'),
            page.locator('#file-upload').click(),
        ]);
        await fileChooser.setFiles('download\sample.pdf');
        await page.locator('input:has-text("Upload")').click();
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await expect(page.locator('text=sample.pdf')).toBeVisible();
        await page.pause();
    })

    test.skip("Example 7", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/hovers');
        await page.hover('[alt="User Avatar"]');
        await expect(page.locator('text=name: user1')).toBeVisible();
        await page.locator('text=View profile').first().click();
        await page.pause();
    })

    test("Example 8", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        await page.press('#target','F1');
    })


    
})

