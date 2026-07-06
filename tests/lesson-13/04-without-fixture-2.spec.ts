import { expect, test } from '@playwright/test'

import { MaterialPage } from './00-pom';
test.describe("Material page - without POM", async () => {
    // dùng pom
    let materialPage: MaterialPage;

    test.beforeEach(async ({ page }) => {

        // khởi tạo POM
        materialPage = new MaterialPage(page);
        //logic dùng chung
        await materialPage.go();
        // ngoài việc đi đến trang materialPage, mình sẽ phải verify "tai lieu hoc automation test" xuất hiện sau đó mình click
        // mình sẽ phai làm 2 việc tất cả các trang
        await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();

        test("Test 3: todo page", async () => {
            await materialPage.page.getByText('Bài học 3: Todo page').click();
            await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
        });

    });

});

// làm vậy hơi bị tốn công đặc biệt trong th thực tế mình sẽ có nhiều file và khi nhân lên tỉ lệ sai sót rất cao
// mình sẽ dùng fixture để giải quyết vấn đề này