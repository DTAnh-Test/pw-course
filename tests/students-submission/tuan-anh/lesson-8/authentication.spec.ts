import { test, expect } from '@playwright/test';

const accounts = {
    valid: {
        username: 'betterbytes.academy.admin',
        password: 'StrongPass@BetterBytesAcademy'
    },
    invalid: {
        username: 'betterbytes.academy.admin',
        password: 'StrongPass@BetterBytesAcademy1'
    }
};

test.describe('AUTH - Authentication', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    test('@AUTH_001: Login fail', async ({ page }) => {
        await test.step('Nhập username, password sai', async () => {
            await page.locator('//input[@id="user_login"]').fill(accounts.invalid.username);
            await page.locator('//input[@id="user_pass"]').fill(accounts.invalid.password);
        });

        await test.step('Click button login', async () => {
            await page.locator('//input[@id="wp-submit"]').click();
        });

        await expect(page.locator('//div[@id="login_error"]')).toBeVisible();
        await expect(page.locator('//div[@id="login_error"]'))
            .toHaveText(`Error: The password you entered for the username ${accounts.invalid.username} is incorrect. Lost your password?`);

    });

    test('@AUTH_001: Login success', async ({ page }) => {
        await test.step('Nhập username, password đúng', async () => {
            await page.locator('//input[@id="user_login"]').fill(accounts.valid.username);
            await page.locator('//input[@id="user_pass"]').fill(accounts.valid.password);
        });

        await test.step('Click button login', async () => {
            await page.locator('//input[@id="wp-submit"]').click();
        });

        await expect(page.url()).toContain('wp-admin');
        await expect(page.locator('//h1[text()="Dashboard"]')).toBeVisible();
    });
});