class PaginaLogin {
    
    elementos = {
      campoUsuario: () => cy.get('#user-name'),
      campoContrasena: () => cy.get('#password'),
      botonIniciarSesion: () => cy.get('#login-button'),
      mensajeError: () => cy.get('.error-message-container'),
    };
  
    
    visitar() {
      cy.visit('/');
    }
  
    iniciarSesion(usuario, contrasena) {
      this.elementos.campoUsuario().type(usuario);
      this.elementos.campoContrasena().type(contrasena);
      this.elementos.botonIniciarSesion().click();
    }
  
    obtenerMensajeError() {
      return this.elementos.mensajeError();
    }
  }
  
  export default PaginaLogin;