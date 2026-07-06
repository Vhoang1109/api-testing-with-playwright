import { expect, test } from '@playwright/test';

import { TodoApiPage } from './todo.api.page';

test('get all todos', async ({ request }) => {

    const todoApiPage = new TodoApiPage(request);

    // không cần thực hiện cục này nữa
    // const response = await request.get('https://material.playwrightvn.com/api/todo-app/v1/todos.php');
    // const responseJson = await response.json();
    // console.log(responseJson.todos.length)
    const responseJson = await todoApiPage.getAll();
    // mình getAll này có JSON và mình sẽ verify
    // sau khi có data mình muốn verify gì thì tuỳ
    expect(responseJson.todos.length).toEqual(80)

});


test('get todo with id = 50', async ({ request }) => {
    const todoApiPage = new TodoApiPage(request);
    const responseJson = await todoApiPage.getTodo(50);
    console.log(responseJson)
    // Kết quả responseJSON là 1 obj gồm 2 thuộc tính succes và todo
    // muốn lấy thuộc tính bên trong mình phải .todo thêm 1 nữa ( 1 lỗi rất phổ biến)
    expect(responseJson.todo.title).toContain("Trang")
    expect(responseJson.todo.status).toContain("pending")
});