import { APIRequestContext, expect } from "@playwright/test";

export class TodoApiPage {
    // khai bao thuoc tinh request
    request: APIRequestContext;
    // lap lai base url cho cac api su dung
    baseUrl: string

    // request truyen vao luc goi ham tao va tao ra dc class TodoApiPage
    constructor(request: APIRequestContext) {
        // đang có thuô
        this.request = request;
        this.baseUrl = "https://material.playwrightvn.com/api/todo-app/v1"
    }
    // method 
    // Get all todo
    async getAll() {
        // this có 1 cái request thuộc tính
        const response = await this.request.get(`${this.baseUrl}/todos.php`);

        // call API get
        // trả về response bằng cách khai báo biến const response trên await this.request.get
        const responseJson = await response.json();

        // tại sao cho expect vào trong POM?

        // kiểm trả 1 lần ở đây cho chắc trong TH lỗi thì lỗi luôn, tránh việc tất cả các test đều phải viêt đoạn expect
        expect(response.status()).toBe(200);

        // responseJson muốn có dữ liệu và dữ liệu đúng khi và chỉ khi data trả về responseJson đúng( thực hiện thành công)
        return responseJson
    }

    // Get single todo
    //  trong getTodo() phải xem API của mình todo như nào. VD: todo có id=1, id sẽ truyền vào trong getTodo() có thể là string, number

    async getTodo(id: number) {
        const response = await this.request.get(`${this.baseUrl}/todo.php?id=${id}`);
        expect(response.status()).toBe(200);
        const responseJson = await response.json();

        return responseJson
    }
    //  create
    // update
    // update partial todo
    // delete todo


}