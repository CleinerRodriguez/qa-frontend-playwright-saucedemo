const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

Given('que el usuario {string} ha iniciado sesión', async function (username) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
  await this.loginPage.login(username, 'secret_sauce');
  this.productsPage = new ProductsPage(this.page);
});

When('agrega el producto {string} al carrito', async function (productName) {
  if (!this.productsPage) {
    this.productsPage = new ProductsPage(this.page);
  }
  await this.productsPage.addBackpackToCart();
});

When('navega al carrito de compras', async function () {
  await this.productsPage.goToCart();
  this.cartPage = new CartPage(this.page);
});

Then('el producto {string} debe visualizarse en el carrito', async function (expectedName) {
  const itemName = await this.cartPage.getCartItemName();
  expect(itemName).toBe(expectedName);
});

When('completa la información de envío con {string}, {string}, {string}', async function (firstName, lastName, zip) {
  await this.cartPage.proceedToCheckout();
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.fillInformation(firstName, lastName, zip);
});

When('finaliza la compra', async function () {
  await this.checkoutPage.finishCheckout();
});

Then('debería ver el mensaje de confirmación {string}', async function (expectedMessage) {
  const message = await this.checkoutPage.getConfirmationMessage();
  expect(message).toBe(expectedMessage);
});