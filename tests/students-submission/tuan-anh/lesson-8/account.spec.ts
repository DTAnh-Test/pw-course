import { test, expect } from '@playwright/test';

const accountAdmin = {
    username: 'betterbytes.academy.admin',
    password: 'StrongPass@BetterBytesAcademy'
};

const accountUsers = {
    username: 'K18_Tuan Anh',
    email: 'abc321312@gmail.com',
    password: '&V9XK3ItwzY*i!EKQ*Pax1ZR',
    firstName: 'Dang',
    lastName: 'Anh'
}

test.describe('ACCOUNT - Account', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        await page.locator('//input[@id="user_login"]').fill(accountAdmin.username);
        await page.locator('//input[@id="user_pass"]').fill(accountAdmin.password);
        await page.locator('//input[@id="wp-submit"]').click();
    });

    test('@ACC_001: Create account with editor permission', async ({ page }) => {
        await test.step('Go to Users page', async () => {
            await page.locator('//li[@class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"]/a').click();
        });

        await expect(page.locator('//h1[@class="wp-heading-inline"]')).toBeVisible();
        await expect(page.locator('//a[@class="page-title-action"]')).toBeEnabled();

        await test.step('Create new user with editor permission', async () => {
            await page.locator('//a[@class="page-title-action"]').click();
            await page.locator('//input[@name="user_login"]').fill(accountUsers.username);
            await page.locator('//input[@name="email"]').fill(accountUsers.email);
            await page.locator('//input[@name="first_name"]').fill(accountUsers.firstName);
            await page.locator('//input[@name="last_name"]').fill(accountUsers.lastName);
            await page.locator('//input[@id="pass1"]').fill(accountUsers.password);
            await page.locator('//select[@name="role"]').selectOption('editor');
            await page.locator('//input[@name="createuser"]').click();
        });

        await expect(page.locator('//div[@id="message"]/p')).toContainText('New user created.');

        await test.step('Logout admin account and login user account', async () => {
            await page.locator('//img[@class="avatar avatar-26 photo"]').hover();
            await expect(page.locator('//img[@class="avatar avatar-26 photo"]/parent::a/following-sibling::div//a[text()="Log Out"]')).toBeVisible();
            await page.locator('//img[@class="avatar avatar-26 photo"]/parent::a/following-sibling::div//a[text()="Log Out"]').click();

            await page.locator('//input[@id="user_login"]').fill(accountUsers.username);
            await page.locator('//input[@id="user_pass"]').fill(accountUsers.password);
            await page.locator('//input[@id="wp-submit"]').click();
        });

        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Dashboard"]')).toBeVisible();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Profile"]')).toBeVisible();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[@class="wp-menu-name" and text()="Posts"]')).toBeVisible();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Plugins "]')).toBeHidden();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Media"]')).toBeVisible();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Pages"]')).toBeVisible();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Comments "]')).toBeVisible();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Tools"]')).toBeVisible();

        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Appearance"]')).toBeHidden();
        await expect(page.locator('//div[@id="adminmenuwrap"]//div[text()="Users"]')).toBeHidden();

        await test.step('Login admin account and delete user account', async () => {
            await page.locator('//img[@class="avatar avatar-26 photo"]').hover();
            await expect(page.locator('//img[@class="avatar avatar-26 photo"]/parent::a/following-sibling::div//a[text()="Log Out"]')).toBeVisible();
            await page.locator('//img[@class="avatar avatar-26 photo"]/parent::a/following-sibling::div//a[text()="Log Out"]').click();

            await page.locator('//input[@id="user_login"]').fill(accountAdmin.username);
            await page.locator('//input[@id="user_pass"]').fill(accountAdmin.password);
            await page.locator('//input[@id="wp-submit"]').click();

            await page.locator('//li[@class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"]/a').click();
            await page.locator('//input[@type="search"]').fill(accountUsers.username);
            await page.locator('//input[@id="search-submit"]').click();

            await page.locator('//thead//input[@id="cb-select-all-1"]').click();
            await page.locator('//select[@name="action"]').selectOption('delete');
            await page.locator('//div[@class="tablenav top"]//input[@id="doaction"]').click();

            if (await page.locator('//label[text()="Delete all content."]//preceding-sibling::input').isVisible() === true) {
                await page.locator('//label[text()="Delete all content."]//preceding-sibling::input').check();
            }
            await page.locator('//input[@id="submit"]').click();


            await page.locator('//input[@type="search"]').fill(accountUsers.username);
            await page.locator('//input[@id="search-submit"]').click();

        });

        await expect(page.locator('//td[@class="colspanchange"]')).toHaveText('No users found.');

    });
});