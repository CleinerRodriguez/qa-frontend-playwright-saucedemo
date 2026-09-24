Feature: Flujo de Compra
  Como usuario autenticado
  Quiero agregar productos al carrito y completar la compra
  Para adquirir los artículos requeridos

Background:
    Given que el usuario navega a la página de login
    And ingresa el usuario "standard_user" y la contraseña "secret_sauce"

  Scenario: Compra exitosa de un producto
    When agrega el producto "Sauce Labs Backpack" al carrito
    And navega al carrito de compras
    Then el producto "Sauce Labs Backpack" debe visualizarse en el carrito
    When completa la información de envío con "Cleiner", "Rodriguez", "13001"
    And finaliza la compra
    Then debería ver el mensaje de confirmación "Thank you for your order!"