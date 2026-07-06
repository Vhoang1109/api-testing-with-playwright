import { test, expect } from '@playwright/test';

// thao tac keo tha
test('Puzzle 01- using Drag to', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/05-xpath-drag-and-drop.html`);

    for (let i = 1; i <= 4; i++) {
        // ${i}
        let fromLoc = page.locator(`#piece-${i}`);
        let toLoc = page.locator(`//div[@data-piece='${i}']`);

        //hover vào tk muốn kéo
        await fromLoc.hover();
        await page.mouse.down(); // di chuyển thằng muốn kéo
        await toLoc.hover(); // di chuyển đến tk muốn thả 
        await page.mouse.up();
    }
});