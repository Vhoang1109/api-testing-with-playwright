import { expect } from '@playwright/test'
import { test } from './00-fixture'

// có 1 cái fixture mới materialPage là cái mình mới khai báo, mình vừa tạo ra bên 00-fixture
// Khi gọi materialPage việc đầu tiền nó chạy đoạn code trong 00-fixture trước khi user này được gọi, và nó sẽ tạo ra page mới , đi đến web page, kiểm tra tài liệu automation test xem có visible hay không
// expect muốn trang chủ load thành công, sau đó bắt đầu chạy code
test("Test 1: Registration page", async ({ materialPage }) => {
    await materialPage.page.getByText('Bài học 1: Register Page (có đủ các element)').click();
    // expect muốn trang chủ load thành công
    await expect(materialPage.page.getByText("User Registration")).toBeVisible();
});

test("Test 2: product page", async ({ materialPage }) => {
    await materialPage.page.getByText('Bài học 2: Product page').click();
    await expect(materialPage.page.getByText("Simple E-commerce")).toBeVisible();
});

// này chỉ thực hiện action vì logic code đã có hết trong 00-fixture

