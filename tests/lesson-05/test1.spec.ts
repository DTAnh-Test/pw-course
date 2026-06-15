import { test, expect } from '@playwright/test';

test('Đăng ký tài khoản', async ({ page }) => {
    await test.step('Truy cập trang Material', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click “Bài học 1: Register Page', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

    await test.step('Nhập thông tin', async () => {
        await page.locator('//input[@id="username"]').fill('Nguyen Van A');

        await page.locator('//input[@id="email"]').pressSequentially('vana@gmail.com');

        await page.locator('//input[@id="male"]').click();

        await page.locator('//input[@id="reading"]').click();

        await page.locator('//input[@id="traveling"]').click();

        await page.locator('//option[@value="technology"]').click();

        await page.locator('//select[@id="country"]').selectOption(["canada"]);

        await page.locator('//input[@id="dob"]').fill("1998-02-25");

        await page.locator('//input[@id="profile"]').setInputFiles('images/Element.png');

        await page.locator('//textarea[@id="bio"]').pressSequentially('Đây là tiểu sử', { delay: 200 });

        await page.locator('//button[@type="submit"]').click();
    })
});