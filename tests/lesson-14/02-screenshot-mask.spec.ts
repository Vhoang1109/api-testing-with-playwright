import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('http://material.playwrightvn.com');
    await expect(page).toHaveScreenshot({
        mask: [
            page.locator("#ads-here"),
            page.locator("//a[@href='index.html']"),
        ],
        maskColor: '#000000ff'
    })
});
