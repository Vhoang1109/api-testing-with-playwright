import { test, expect } from '@playwright/test';

test('locate - timezone', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/017-detect-user-agent.html`);

});