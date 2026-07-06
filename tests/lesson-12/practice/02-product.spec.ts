import { expect, test } from '@playwright/test';

import { ProductApiPage } from '../../../page/product/product.api.page';

test('get all products', async ({ request }) => {
    //                      new tên class đang gọi đến hàm tạo của nó
    // khi mà truyền biến thì biến này sẽ được truyền tương ứng vào hàm tạo của class đó
    const productApiPage = new ProductApiPage(request);
    const responseJson = await productApiPage.getProducts();
   
    expect(responseJson.data.products.length).toEqual(10)
    console.log(responseJson)

});


