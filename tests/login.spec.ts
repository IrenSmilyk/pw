import { test, expect } from '@playwright/test';

test('Perform Login and verify elements on the page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();

  const productItems = await page.locator('[data-test="inventory-item"]').count();
  expect(productItems).toBeGreaterThan(1);

});
