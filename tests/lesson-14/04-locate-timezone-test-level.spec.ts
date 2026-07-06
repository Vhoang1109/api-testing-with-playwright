import { test, expect } from '@playwright/test';

// cấu hình config level cho cái file đấy
test.use({

    locale: 'en-GB',

    timezoneId: 'Europe/Paris'
});

test('locate - timezone', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/017-detect-user-agent.html`);
// chờ 10s
    await page.waitForTimeout(10_000)
});


