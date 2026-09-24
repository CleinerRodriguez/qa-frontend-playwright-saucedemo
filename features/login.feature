Feature: Autenticación de Usuarios
  Como usuario de SauceDemo
  Quiero iniciar sesión con mis credenciales
  Para acceder a la tienda de productos

Background:
    Given que el usuario navega a la página de login

  Scenario: Inicio de sesión exitoso con usuario estándar
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ingresar a la página principal de productos

  Scenario: Inicio de sesión fallido con usuario bloqueado
    When ingresa el usuario "locked_out_user" y la contraseña "secret_sauce"
    Then debería ver un mensaje de error que contiene "Epic sadface: Sorry, this user has been locked out."