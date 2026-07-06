import { expect, test } from '@playwright/test'

import { MaterialPage } from './00-pom';
test.describe("Material page - without POM", async () => {
    // dùng pom
    let materialPage: MaterialPage;
    // before chỉ áp dụng trên 1 scope đó là file,nếu như trong trường hợp muốn dùng lại thì cách gọi manual nhất cắt cái test 03 vào đây
    test.beforeEach(async ({ page }) => {
        // khởi tạo POM
        materialPage = new MaterialPage(page);
        //logic dùng chung
        await materialPage.go();
        await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();
    });

    test("Test 1: Registration page", async () => {
        await materialPage.page.getByText('Bài học 1: Register Page (có đủ các element)').click();
        await expect(materialPage.page.getByText("User Registration")).toBeVisible();
    });

    test("Test 2: product page", async () => {
        await materialPage.page.getByText('Bài học 2: Product page').click();
        await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
    });

    // chỗ này vẫn chạy được nhưng nó sẽ xảy ra 1 tình huống, khi mà ng ta tách file, là ng ta sẽ phân tách các test này theo ý nghĩa của nó

    test("Test 3: todo page", async () => {
        await materialPage.page.getByText('Bài học 3: Todo page').click();
        await expect(materialPage.page.getByText("To-Do List")).toBeVisible();
    });
});