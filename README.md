# Playwright - Home Task 

## Test 1 - Perform Login:
1. Perform login using "standard_user"
2. On the opened page verify: 
3. Products (1) title is displayed
4. Shopping Cart icon (2) is displayed
5. More than 1 product (3) is displayed

## Test 2 - Add product to the cart:
1. Perform login using "standard_user"
2. Add the first product to the cart by clicking Add to Cart button
3. Verify Shopping Cart icon contains the number of products added (equal 1)
4. Open the Shopping Cart and verify the added product is displayed (the data should be taken from the Products page and used here to as an expected result)
5. Remove the product by clicking Remove
6. Verify no products are available in the Shopping Cart

## Run tests

```bash
npx playwright test
```