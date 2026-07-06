import { test as base, expect } from '@playwright/test'
import { MaterialPage } from './00-pom';

const test = base.extend<{ loggedInPage: MaterialPage }>({
    loggedInPage: async ({ page }, use) => {
        // khởi tạo materialPage trước
        const materialPage = new MaterialPage(page);
        //cop logic file 04
        await materialPage.go();
        await expect(materialPage.page.getByText("Tài liệu học automation test")).toBeVisible();

        await use(materialPage) //nay chinh la kieu du lieu ma minh da khai bao
    }
})
export { test };