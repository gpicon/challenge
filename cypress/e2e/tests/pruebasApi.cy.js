import ServicioApi from '../api/ServicioApi';
const servicioApi = new ServicioApi();

describe('Pruebas de Funcionalidad de API', () => {
  it('Obtener los departamentos de Mercado Libre y verificar la propiedad departments', () => {
    servicioApi.obtenerDepartamentosMercadoLibre().then((respuesta) => {
      expect(respuesta.status).to.eq(200);
      expect(respuesta.body).to.have.property('departments');
    });
  });
});