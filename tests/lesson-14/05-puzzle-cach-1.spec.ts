import { test, expect } from '@playwright/test';

test('Puzzle 01- using Drag to', async ({ page }) => {
    await page.goto(`https://material.playwrightvn.com/05-xpath-drag-and-drop.html`);
    // //piece1
    // // from
    // // có thể dùng const nhưng sẽ k đổi lạ dc giá trị
    // let fromLoc = page.locator("#piece-1");
    // // to
    // let toLoc = page.locator("//div[@data-piece='1']");
    // // from.dragTo(to)
    // // bất kỳ action nào đều p có await
    // await fromLoc.dragTo(toLoc)

    // //piece2 (o cần p khai báo lại tại mình dùng locator kia)
    // // from
    // fromLoc = page.locator("#piece-2");
    // // to
    // toLoc = page.locator("//div[@data-piece='2']");
    // // from.dragTo(to)
    // // bất kỳ action nào đều p có await
    // await fromLoc.dragTo(toLoc)
    // //Tương tự vậy vs 3-4

    // TH xử lý 300-puzzlr
    for (let i = 1; i <= 4; i++) {
        // ${i}
        let fromLoc = page.locator(`#piece-${i}`);
        let toLoc = page.locator(`//div[@data-piece='${i}']`);
        await fromLoc.dragTo(toLoc)
    }
});

