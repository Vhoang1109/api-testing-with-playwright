import { expect } from '@playwright/test'
import { test } from './00-fixture'
test.describe("Material page - without POM", async () => {

    // Dùng POM
    // có thể sử dụng materialPage
    test("Test 3: todo page", async ({ materialPage }) => {
        await materialPage.page.getByText('Bài học 3: Todo page').click();
        await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
    });

});


// trong tất cả các file sau này, vdu: 100 file, vẫn chung 1 logic setup ở ./00-fixture

