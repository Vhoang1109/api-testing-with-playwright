import { Page } from "@playwright/test";
import { ProductPage } from "./product.page";
export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    // action
    async navigateToProductPage() {
        this.page.locator('//div[text()=product..."]').click();
        // trả về 1 ProductPage mới, tại vì khi bên dùng làm, nó sẽ hướng đến ProductPage, để làm tiếp action
        return new ProductPage(this.page);

    }
}