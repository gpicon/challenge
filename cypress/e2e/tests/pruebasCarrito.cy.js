import PaginaLogin from '../pages/PaginaLogin';
import PaginaInventario from '../pages/PaginaInventario';
const paginaLogin = new PaginaLogin();
const paginaInventario = new PaginaInventario();
const datosPrueba = require('../../fixtures/datosPrueba.json');

describe('Pruebas de Funcionalidad del Carrito de Compras', () => {
  beforeEach(() => {
    paginaLogin.visitar();
    paginaLogin.iniciarSesion(datosPrueba.usuarioValido.usuario, datosPrueba.usuarioValido.contrasena);
    cy.url().should('include', '/inventory.html');
  });

  // Agregar productos al carrito
  it('Agregar un producto al carrito', () => {
    paginaInventario.agregarProducto('backpack');
    paginaInventario.obtenerContadorCarrito().should('have.text', '1');
  });

  it('Agregar múltiples productos al carrito', () => {
    paginaInventario.agregarProducto('backpack');
    paginaInventario.agregarProducto('bike-light');
    paginaInventario.obtenerContadorCarrito().should('have.text', '2');
  });

  // Eliminar productos del carrito
  it('Eliminar un producto del carrito desde la página de inventario', () => {
    paginaInventario.agregarProducto('backpack');
    paginaInventario.eliminarProducto('backpack');
    paginaInventario.obtenerContadorCarrito().should('not.exist');
  });

  it('Eliminar un producto desde la página del carrito', () => {
    paginaInventario.agregarProducto('backpack');
    paginaInventario.irAlCarrito();
    paginaInventario.eliminarProducto('backpack');
    paginaInventario.verificarProductoEnCarrito().should('not.contain', 'Sauce Labs Backpack');
  });
});