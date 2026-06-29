import { request, test } from "@playwright/test";

test('Request method - Post', async ({ request }) => {
    const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';

    const loginResponse = await request.post(`${baseURL}/login.php`, {
        // xem data trong api doc yêu cầu gì
        data: {
            "email": "admin@example.com",
            "password": "password"
        }
    });
    // Lấy const log ra dữ liệu
    const loginResponseJSON = await loginResponse.json();
    console.log(loginResponseJSON);

    // thực hiện const token
    const token = loginResponseJSON.data.token

    // Bước 2 response: call API with token
    const userResponse = await request.get(`${baseURL}/users.php`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // log status url
    console.log("Status:", userResponse.status());
    console.log("Status Text:", userResponse.statusText())

    // sau khi có response thì mình sẽ lấy responseJSON
    const userResponseJSON = await userResponse.json();
    console.log(userResponseJSON)
});