import { APIRequestContext, expect } from "@playwright/test";

// tao pom product api page
export class ProductApiPage {
    //them thuoc tinh request va baseUrl
    request: APIRequestContext;
    baseUrl: string

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseUrl = `https://material.playwrightvn.com/api/product-catalog/v1/`
    }
    // tao ham getProducts
    async getProducts() {
        // call api get products
        const response = await this.request.get(`${this.baseUrl}/products.php?page=1&limit=10&sort_by=created_at&sort_order=DESC`);
        // verify status code
        expect(response.status()).toBe(200);
        // convert response to json
        const responseJson = await response.json();
        return responseJson
    }
}