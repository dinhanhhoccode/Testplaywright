import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.goto('https://www.google.com/search?q=wiki&oq=wiki&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQzMjRqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Wikipedia, bách khoa toàn th' }).click();
  await page.getByPlaceholder('Tìm kiếm trên Wikipedia').click();
  await page.getByPlaceholder('Tìm kiếm trên Wikipedia').fill('open ai');
  await page.getByRole('button', { name: 'Tìm kiếm' }).click();
  await page.getByRole('link', { name: 'Lịch sử', exact: true }).click();
  await page.getByRole('link', { name: 'Khởi đầu phi lợi nhuận' }).click();
  await page.getByRole('link', { name: 'Chuyển đổi sang định hướng lợ' }).click();
  await page.getByRole('link', { name: 'Sản phẩm và ứng dụng' }).click();
  await page.getByRole('link', { name: 'Mô hình tạo nội dung (' }).click();
  await page.getByRole('link', { name: 'Các mô hình GPT' }).click();
});
