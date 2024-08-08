import { test, expect } from '@playwright/test';

test('Add product to the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const firstProductName = await page.locator('[data-test="inventory-item"]:first-of-type .inventory_item_name').textContent();
    await page.locator('[data-test="inventory-item"]:first-of-type button').click();
    
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    await page.locator('.shopping_cart_link').click();

    const cartProductName = await page.locator('.cart_item .inventory_item_name').textContent();
    expect(cartProductName).toBe(firstProductName);  

    await page.locator('.cart_item button').click();

    const cartItemsCount = await page.locator('.cart_item').count();
    expect(cartItemsCount).toBe(0);

  });


