import test, { test as teardown } from '@playwright/test'
test("Teardown", async () => {
    console.log("Global teardown is running")
});  