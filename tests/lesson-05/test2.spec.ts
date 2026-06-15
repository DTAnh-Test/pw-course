import { test } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await test.step('Đi tới trang Material', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click Bài học 2: Product page', async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    });

    await test.step('Thêm sản phẩm vào giỏ hàng', async () => {
        await page.locator('//button[@data-product-id=1]').click({ clickCount: 2 });

        await page.locator('//button[@data-product-id=2]').click({ clickCount: 3 });

        await page.locator('//button[@data-product-id=3]').click();

    });
});