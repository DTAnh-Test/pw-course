import { test, expect } from '@playwright/test';

test('verify title homepage', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('navigation succsess to Lession 1: Register Page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
  await page.close();
});

test('Navigation page', async({page}) => {
  await page.goto('https://material.playwrightvn.com/');

  await page.getByRole('link', {name: 'Lý thuyết axe methods'}).click();
  await expect(page.getByRole('heading',{name: 'Học XPath Axe Methods'})).toBeVisible();

  await page.goBack();
  await expect(page.getByRole('heading',{name: 'Tài liệu học automation test'})).toBeVisible();

  await page.getByRole('link', {name: 'Bài học 19: Giải captcha'}).click();
  await expect(page.getByRole('heading',{name: 'Captcha Verification Demo'})).toBeVisible();

  await page.getByRole('link', {name: 'Trở về trang chủ'}).click();
  await expect(page.getByRole('heading',{name: 'Tài liệu học automation test'})).toBeVisible();

  await page.getByRole('link', {name: 'Bài học 17: Text editor'}).click();
  await expect(page.getByText('Trình soạn thảo văn bản với xem trước trực tiếp')).toBeVisible();

  await page.getByRole('button', {name: 'Sao chép HTML'}).click();
  await expect(page.getByText('Đã sao chép HTML vào clipboard')).toBeVisible();
  await expect(page.getByText('Đã sao chép HTML vào clipboard')).toBeHidden();
  await expect(page.getByText('Sẵn sàng')).toBeVisible();

  await page.goBack();
  await expect(page.getByRole('heading',{name: 'Tài liệu học automation test'})).toBeVisible();
  await page.close();
}
)
