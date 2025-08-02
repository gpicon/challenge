class ServicioApi {
    // Endpoints
    endpoints = {
      mercadoLibreDepartments: 'https://www.mercadolibre.com.ar/menu/departments',
    };
  
    // Acciones
    obtenerDepartamentosMercadoLibre() {
      return cy.request({
        method: 'GET',
        url: this.endpoints.mercadoLibreDepartments,
        failOnStatusCode: false,
      });
    }
  }
  
  export default ServicioApi;