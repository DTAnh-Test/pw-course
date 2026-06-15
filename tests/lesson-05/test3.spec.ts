import { test, expect } from '@playwright/test';

test('Todo list', async ({ page }) => {
    await test.step('Đi tới trang Material', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click Bài học 3: Todo page', async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

    await test.step('Add 100 todo item', async () => {
        for (let number = 1; number <= 100; number++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${number}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    await test.step('Xoá các todo có số lẻ', async () => {
        page.on('dialog', dialog => dialog.accept());
        for (let number = 1; number < 100; number += 2) {
            await page.locator(`//button[@id="todo-${number}-delete"]`).click();
        }
    });
});