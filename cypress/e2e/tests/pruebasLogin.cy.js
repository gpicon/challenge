import PaginaLogin from '../pages/PaginaLogin';
const paginaLogin = new PaginaLogin();
const datosPrueba = require('../../fixtures/datosPrueba.json');

describe('Pruebas de Funcionalidad de Inicio de Sesión', () => {
  beforeEach(() => {
    paginaLogin.visitar();
  });

  //Inicio de sesión exitoso
  it('Iniciar sesión exitosamente con credenciales válidas', () => {
    paginaLogin.iniciarSesion(datosPrueba.usuarioValido.usuario, datosPrueba.usuarioValido.contrasena);
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('Redirigir a la página de inventario tras inicio de sesión exitoso', () => {
    paginaLogin.iniciarSesion(datosPrueba.usuarioValido.usuario, datosPrueba.usuarioValido.contrasena);
    cy.get('.inventory_list').should('be.visible');
  });

  //Inicio de sesión fallido
  it('Mostrar mensaje de error para credenciales inválidas', () => {
    paginaLogin.iniciarSesion(datosPrueba.usuarioInvalido.usuario, datosPrueba.usuarioInvalido.contrasena);
    paginaLogin.obtenerMensajeError().should('contain', 'Username and password do not match');
  });

  it('Fallar intencionalmente para demostración', () => {
    paginaLogin.iniciarSesion(datosPrueba.usuarioInvalido.usuario, datosPrueba.usuarioInvalido.contrasena);
    paginaLogin.obtenerMensajeError().should('contain', 'Mensaje de error incorrecto');
  });
});