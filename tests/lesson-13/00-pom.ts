import { Page } from "@playwright/test";

// POM  của materialPage
export class MaterialPage {
    page: Page;
    baseURL: string

    constructor(page: Page) {
        this.page = page;
        this.baseURL = "https://material.playwrightvn.com/index.html";
    }

    async go() {
        await this.page.goto(this.baseURL);
    }
}