# Framework de Automatización de Pruebas - Challenge Educabot

Este repositorio contiene un framework de automatización de pruebas desarrollado con **Cypress 14.5.3** para pruebas de interfaz de usuario (UI) y API. Las pruebas cubren funcionalidades de inicio de sesión, carrito de compras, y consumo de un endpoint de API de Mercado Libre, utilizando el patrón **Page Object Model (POM)** con nombres de variables y funciones en español para mayor legibilidad a la hora de evaluarlo.

## Requisitos previos
Para ejecutar las pruebas, necesita instalar las siguientes herramientas. Sigue los pasos detallados para Windows.

### 1. Instalar Git
Git es necesario para clonar el repositorio.
- Descarga Git desde https://git-scm.com/downloads.
- Ejecuta el instalador y acepta las opciones predeterminadas.
- Verifica la instalación abriendo CMD y corriendo:
git --version

### 2. Instalar Node.js
Node.js es necesario para instalar y ejecutar Cypress.
- Descarga la versión LTS de Node.js (22.x o superior) desde https://nodejs.org/en/download.
- Ejecuta el instalador y acepta las opciones predeterminadas.
- Verifica la instalación en CMD:
node --version
npm --version

### 3. Instalar Google Chrome
Las pruebas se ejecutan en Google Chrome.
- Descarga Chrome desde https://www.google.com/chrome/.
- Instala siguiendo las instrucciones.
- Verifica que Chrome esté instalado abriendo el navegador.

## Instalación del proyecto
Sigue estos pasos para clonar el repositorio e instalar las dependencias.

### 1. Clonar el repositorio
- Abre CMD.
- Navega a un directorio donde quieras guardar el proyecto (por ejemplo, `C:\Users\TuUsuario\Proyectos`):
- Clona el repositorio con el siguiente comando:
git clone https://github.com/gpicon/challenge.git


### 2. Instalar dependencias
- Instala las dependencias listadas en `package.json` con el siguiente comando:
npm install

Esto instalará:
- `cypress@14.5.3`: Framework de automatización.
- `cypress-mochawesome-reporter`: Generador de reportes HTML.

## Cómo ejecutar las pruebas
Las pruebas se ejecutan en Google Chrome en modo no visible y generan un reporte HTML con capturas de pantalla para los tests fallidos.

1. **Ejecutar los tests**:
 - En CMD, desde la raíz del proyecto, corre:
   npm test
   
   Esto ejecuta:
   - Todos los tests en Chrome (`cypress run --browser chrome`).
   - Genera un reporte en `cypress/reports/mochawesome-report/mochawesome.html`.
   - Guarda capturas de pantalla de tests fallidos en `cypress/reports/screenshots`.

2. **Ver los resultados**:
 - Abre el reporte en un navegador.
 - El reporte muestra:
   - Resultados de los tests (Passed/Failed).
   - Capturas de pantalla para el test fallido intencionalmente en `pruebasLogin.cy.js`.

3. **Ejecutar en modo interactivo (opcional)**:
 - Para depurar los tests en Chrome ejecuta el siguiente comando:
   npx cypress open
   - Selecciona **E2E Testing**.
   - Elige **Chrome**.
   - Haz clic en los archivos de prueba (`pruebasLogin.cy.js`, `pruebasCarrito.cy.js`, `pruebasApi.cy.js`) para ejecutarlos.

## Notas
- El test de API (`pruebasApi.cy.js`) puede fallar por restricciones de CORS en `https://www.mercadolibre.com.ar/menu/departments`.
- Los tests están diseñados con el patrón **Page Object Model (POM)** para mayor mantenibilidad.

## Contacto
Para dudas o problemas contacta a Geronimo Picon (geropico@gmail.com)