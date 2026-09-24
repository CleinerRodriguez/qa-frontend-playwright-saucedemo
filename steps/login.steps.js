const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');

Given('que el usuario navega a la página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('debería ingresar a la página principal de productos', async function () {
  this.productsPage = new ProductsPage(this.page);
  const title = await this.productsPage.getTitle();
  expect(title).toBe('Products');
});

Then('debería ver un mensaje de error que contiene {string}', async function (expectedMessage) {
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg).toContain(expectedMessage);
});