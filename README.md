# QA Frontend Automation Challenge - SauceDemo

Suite de pruebas automatizadas end-to-end para [SauceDemo](https://www.saucedemo.com/) usando Playwright, Cucumber.js, Gherkin y JavaScript.

## Informacion del postulante

- **Candidato:** Cleiner Jhony Rodriguez Sanchez
- **Puesto:** QA Senior / QA Automation Lead
- **Proceso:** Pacifico Seguros
- **Especialidad demostrada:** Automatizacion E2E, BDD, Page Object Model y pruebas funcionales web

## Objetivo

Validar el flujo principal de compra de SauceDemo:

- Inicio de sesion con un usuario valido.
- Rechazo de acceso para un usuario bloqueado.
- Agregar un producto al carrito.
- Validar el producto en el carrito.
- Completar el checkout hasta la confirmacion de la orden.

## Tecnologias

- Node.js 18 o superior
- Playwright
- Cucumber.js 13
- JavaScript/CommonJS
- Page Object Model

## Prerrequisitos

Instala [Node.js](https://nodejs.org/) 18 o superior. npm se instala junto con Node.js.

## Instalacion

```bash
git clone https://github.com/CleinerRodriguez/qa-frontend-playwright-saucedemo.git
cd qa-frontend-playwright-saucedemo
npm install
npx playwright install chromium
```

El ultimo comando descarga el navegador administrado por Playwright. En equipos donde la descarga no este disponible, el proyecto puede usar una instalacion local de Chrome mediante la variable `CHROME_PATH`.

Ejemplo en PowerShell:

```powershell
$env:CHROME_PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"
```

## Ejecucion

Ejecuta todos los escenarios con:

```bash
npm test
```

La ejecucion utiliza el navegador en modo headless y genera el reporte HTML en:

```text
cucumber-report.html
```

## Credenciales de prueba

| Usuario | Contrasena | Resultado esperado |
| --- | --- | --- |
| `standard_user` | `secret_sauce` | Inicio de sesion exitoso |
| `locked_out_user` | `secret_sauce` | Mensaje de usuario bloqueado |

## Estructura del proyecto

```text
.
├── features/             # Casos de negocio escritos en Gherkin
├── pages/                # Page Objects y localizadores de la aplicacion
├── steps/                # Implementacion de los pasos Gherkin
├── support/              # Hooks y ciclo de vida del navegador
├── package.json          # Dependencias y comandos del proyecto
└── README.md             # Documentacion
```

## Estrategia de automatizacion

La suite sigue una separacion de responsabilidades:

- **Cucumber/BDD:** expresa los criterios de aceptacion en escenarios legibles para perfiles tecnicos y no tecnicos.
- **Page Object Model:** concentra los localizadores y las acciones de cada pantalla en `pages/`, evitando duplicacion en los steps.
- **Hooks:** crean un contexto y una pagina aislados para cada escenario y cierran los recursos al finalizar.
- **Assertions:** los steps validan resultados observables del negocio, como el titulo de productos, el contenido del carrito y la confirmacion de la orden.

Los selectores utilizan principalmente atributos `data-test` y selectores estables de la aplicacion para reducir el acoplamiento con estilos visuales.

## Escenarios incluidos

### `features/login.feature`

- Inicio de sesion exitoso con `standard_user`.
- Inicio de sesion rechazado con `locked_out_user`.

### `features/checkout.feature`

- Inicio de sesion.
- Agregar `Sauce Labs Backpack` al carrito.
- Validar el producto en el carrito.
- Completar los datos de envio.
- Finalizar la compra y validar `Thank you for your order!`.

## Reportes y troubleshooting

Si Playwright muestra un error indicando que no existe el ejecutable del navegador, ejecuta:

```bash
npx playwright install chromium
```

Si la descarga no es posible, configura `CHROME_PATH` apuntando a un ejecutable local de Chrome y vuelve a ejecutar `npm test`.

El reporte HTML se regenera en cada ejecucion. No se requiere una base de datos ni servicios locales adicionales; SauceDemo debe estar disponible en Internet.

## Limitaciones conocidas

- La suite depende de la disponibilidad de `https://www.saucedemo.com/`.
- Las pruebas estan disenadas para ejecutarse en modo headless.
- Las credenciales corresponden a las cuentas publicas de demostracion de SauceDemo.
