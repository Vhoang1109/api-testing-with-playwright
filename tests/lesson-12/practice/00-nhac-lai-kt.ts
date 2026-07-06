import { Locator, Page, test } from "@playwright/test"

export class MaterialPage {
// UI page có giao diện như vậy

    page: Page; // Page import từ pw
    // vi du co locator cua bai hoc 1 
    // bai1Loc ( thuoc tinh, tuc la cac phan tu tren trang)
    bai1Loc: Locator

    constructor(page: Page) {
        // assign page 
        this.page = page;
        this.bai1Loc = this.page.locator("//a[contains(text(), 'Register')]")
    }
    // tuong tu vay co rat nhieu thuoc tinh
    // co cac action tren page ( click, dbclick, hover)

    // tổ chức hàm theo test case của mình. test case của mình làm gì trên trang này thì mình sẽ tổ chức các cái hàm đấy. 

    //  
    async clickLesson(name: string) {

        // tương tự vậy có rất nhiều if else ở đây hoặc switch case để mình xử lý
        if (name === "bai_1") {
            await this.bai1Loc.click();
        }

        // không nên assertion in POM
        // assertion tương đương vs expect()

    }
}

// API 
// thuoc tinh: request
// phuong thuc: