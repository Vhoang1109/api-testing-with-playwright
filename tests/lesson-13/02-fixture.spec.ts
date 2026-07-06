import { test } from '@playwright/test';

// run context test with multiple pages
test("My simple UI test", async ({ context }) => {

    //console.log("Hello World"); // context page fixture
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");

    const page2 = await context.newPage();
    await page2.goto("https://ems.cosyfoto.com/");
});
test("My simple API test", async ({ request }) => {
    const response = await request.get("https://playwright.dev/");
});  

// run browser test with multiple contexts
test("My simple test with browser", async ({ browser }) => {
// mỗi 1 lần browser.newContext() này nó sẽ mở ra 1 instance mới, 
// sau đó từng instance một sẽ tạo các tab khác nhau bằng cách newContext() sẽ tạo ra 1 context mới;
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    // sau khi có page1 thì mới có thể gọi goto
    await page1.goto("https://playwright.dev/");

    const context2 = await browser.newContext();
    // tạo tab mình sẽ dùng context2.newPage() để tạo ra page2
    const page2 = await context2.newPage();
    await page2.goto("https://ems.cosyfoto.com/");
    console.log("stop here");
});

// test giúp mình lấy ra browserName, vd: chromium, firefox, webkit
test("My simple test with browserName", async ({ browserName }) => {
    // ứng dụng của fixture browserName là gì, vd: chromium, firefox, webkit
    // Khi mình gọi lệnh test.skip, nếu mà browserName === "chromium" thì nó sẽ skip test này, còn nếu mà browserName khác chromium thì nó sẽ chạy test này
test.skip(browserName === "chromium" || browserName === "firefox");
  // khi chạy sẽ bt ra browserName là gì, vd: chromium, firefox, webkit
    console.log("browserName: ", browserName);
});  