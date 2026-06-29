import { test } from '@playwright/test';

// viết test get all todos sử dụng fixture request

test.describe("full method", async () => {
    //khai báo biến id
    let id: any; // any kiểu dữ liệu bất kỳ

    test('1. Create todo', async ({ request }) => {
        // lấy ra id
        // lưu lại
        
        // khai báo biến khi gán biến code sẽ gọn gàng
        const responsePost = await request.post('https://material.playwrightvn.com/api/todo-app/v1/todo.php',
            {
                // Truyền request body thông qua data object trong api doc.
                // Playwright sẽ tự động chuyển object này thành JSON trước khi gửi request."
                data: {
                    "title": "VMO group",
                    "description": "Write comprehensive docs for the API",
                    "status": "pending",
                    "priority": "high",
                    "due_date": "2025-10-25T17:00:00",
                    "user_id": 1
                }
            });
        // log status url
        console.log("Status:", responsePost.status());
        console.log("Status Text:", responsePost.statusText())
        // log ra dữ liệu trả về json
        const responseJson = await responsePost.json();
        console.log(responseJson)

        // kết hợp lấy ra id + lưu id lại
        id = responseJson.todo.id;
        console.log(id)
    });

    // Xem dữ liệu theo id
    test('2.0 Get todo', async ({ request }) => {
        const responseGet = await request.get(`https://material.playwrightvn.com/api/todo-app/v1/todo.php?id=${id}`)
        // log status url
        console.log("Status:", responseGet.status());
        console.log("Status Text:", responseGet.statusText())
        const responseJson = await responseGet.json()
        console.log(responseJson)
    });

    // Xem tất cả 
    // test('2.1 Get all todo', async ({ request }) => {
    //     const responseGet = await request.get(`https://material.playwrightvn.com/api/todo-app/v1/todos.php`)
    //     const responseJson = await responseGet.json()
    // //  console.log(responseJson.todos.length)// kiem tra so phan tu
    //     console.log(responseJson)
    // });

    //Cập nhật dữ liệu (update)
    test('3. Update todo', async ({ request }) => {
        const responsePut = await request.put('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
            data: {
                "id": id,
                "title": " Upnext JTC ",
                "description": "Welcome to new member team Tester",
                "status": "in_progress",
                "priority": "high",
                "due_date": "2026-06-25T17:00:00",
                "user_id": 1
            }
        });
        // log status url
        console.log("Status:", responsePut.status());
        console.log("Status Text:", responsePut.statusText())

        const responseJson = await responsePut.json();
        console.log(responseJson)
    });

    // Fix nhỏ lẻ dữ liệu
    test('3. chore todo', async ({ request }) => {
        const responsePatch = await request.patch('https://material.playwrightvn.com/api/todo-app/v1/todo.php', {
            data: {
                "id": id,
                "title": " Upnext JTC ",
                "description": "Welcome to new member team Test",
                "status": "completed",
                "priority": "high",
                "due_date": "2026-06-25T17:00:00",
                "user_id": 1
            }
        })
        // log status url
        console.log("Status:", responsePatch.status());
        console.log("Status Text:", responsePatch.statusText())

        const responseJson = await responsePatch.json();
        console.log(responseJson)
    });

    // Xoá dữ liệu
    test('4. Delete todo', async ({ request }) => {
        // delete todo có id ở bước 1
        const responseDelete = await request.delete('https://material.playwrightvn.com/api/todo-app/v1/todo.php',
            {
                data: {
                    "id": id
                }
            });
        // log status url
        console.log("Status:", responseDelete.status());
        console.log("Status Text:", responseDelete.statusText())
        // log response mới biết đúng hay sai
        const responseJson = await responseDelete.json();
        console.log(responseJson)

    })
});