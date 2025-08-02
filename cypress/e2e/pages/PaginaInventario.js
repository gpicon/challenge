class PaginaInventario {
    
    elementos = {
      botonAgregarProducto: (id) => cy.get(`#add-to-cart-sauce-labs-${id}`),
      botonEliminarProducto: (id) => cy.get(`#remove-sauce-labs-${id}`),
      iconoCarrito: () => cy.get('.shopping_cart_link'),
      contadorCarrito: () => cy.get('.shopping_cart_badge'),
      listaProductos: () => cy.get('.inventory_list'),
      listaCarrito: () => cy.get('.cart_list'),
    };
  
    
    agregarProducto(id) {
      this.elementos.botonAgregarProducto(id).click();
    }
  
    eliminarProducto(id) {
      this.elementos.botonEliminarProducto(id).click();
    }
  
    irAlCarrito() {
      this.elementos.iconoCarrito().click();
    }
  
    obtenerContadorCarrito() {
      return this.elementos.contadorCarrito();
    }
  
    verificarProductoEnCarrito() {
      return this.elementos.listaCarrito();
    }
  }
  
  export default PaginaInventario;