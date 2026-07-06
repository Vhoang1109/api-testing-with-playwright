import { expect, test } from '@playwright/test';

import { HomePage } from './home.page';

test('Add product to cart', async ({ page }) => {
    await test.step('step 1', async () => {

        // await chả có tác dung gì, có thể bỏ cx dc
        const heading = await page.locator('//h1[text()="Login"]');

        const homePage = new HomePage(page);
        // khi mà mình navigateToProductPage thì nó sẽ trả về 1 ProductPage mới, tại vì khi bên dùng làm, nó sẽ hướng đến ProductPage, để làm tiếp action
        const productPage = await homePage.navigateToProductPage();
        //sử dụng productPage để addToCart
        await productPage.addToCart();
    });

});