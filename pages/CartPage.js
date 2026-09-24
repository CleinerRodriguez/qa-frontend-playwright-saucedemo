class CartPage {
  constructor(page) {
    this.page = page;
    // Agregamos .first() para evitar la ambigüedad si hay varios
    this.cartItemName = page.locator('.inventory_item_name').first();
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getCartItemName() {
    // Asegura que la URL sea la del carrito antes de buscar el texto
    await this.page.waitForURL('**/cart.html');
    return await this.cartItemName.textContent();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;