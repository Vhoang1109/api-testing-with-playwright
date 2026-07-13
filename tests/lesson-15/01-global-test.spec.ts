// truoc khi test chay: global setup is running


// sau khi test chay: global teardown is running

import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    console.log("Example test for global setup & global teardown")
});