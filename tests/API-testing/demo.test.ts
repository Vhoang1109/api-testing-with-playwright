import { expect, test } from "@playwright/test";

test('2.1 Get all todo', async ({ request }) => {
    const responseGet = await request.get(`https://material.playwrightvn.com/api/todo-app/v1/todos.php`)
    // log status response
    console.log("Status:", responseGet.status());
    console.log("Status Text:", responseGet.statusText())

    // log ra du lieu
    const responseJson = await responseGet.json()
    console.log(responseJson) //trả về toàn bộ dữ liệu

    console.log(responseJson.todos) // trả về mảng json

    console.log(responseJson.todos.length) // kiểm tra số phần tử của mảng

    console.log(responseGet) // trả về HTTP Response.

    // sử dụng assertion để check status code
    expect(responseGet.status()).toBe(200);

    // Vi du doi expect response status = 201
   // expect(responseGet.status()).toBe(201); //fail because  Expected: 201, Received: 200

    //VD: kiểm tra phần tử có đúng hay k, thêm toEqual()  
    //expect(responseJson.todos.length).toEqual(61)
});