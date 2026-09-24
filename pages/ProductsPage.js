class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async getTitle() {
    return await this.title.textContent();
  }

  // Método dinámico según el nombre del producto
  async addProductToCart(productName) {
    const formattedName = productName.toLowerCase().replace(/\s+/g, '-');
    await this.page.locator(`[data-test="add-to-cart-${formattedName}"]`).click();
  }

  // Mantenemos este por compatibilidad si lo usas directamente
  async addBackpackToCart() {
    await this.addProductToCart('Sauce Labs Backpack');
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

// Exportación requerida para CommonJS (.js)
module.exports = ProductsPage;