const productoRepository = require("../repositories/producto.repository");

class ProductoService {
  async obtenerTodos() {
    return await productoRepository.findAll();
  }

  async obtenerPorId(id) {
    const producto = await productoRepository.findById(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    return producto;
  }

  async crear(productoData) {
    // Validaciones básicas
    if (!productoData.nombre || !productoData.precio) {
      throw new Error("Nombre y precio son requeridos");
    }
    return await productoRepository.create(productoData);
  }

  async actualizar(id, productoData) {
    const productoExistente = await productoRepository.findById(id);
    if (!productoExistente) {
      throw new Error("Producto no encontrado");
    }
    return await productoRepository.update(id, productoData);
  }

  async eliminar(id) {
    const producto = await productoRepository.findById(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    return await productoRepository.delete(id);
  }
}

module.exports = new ProductoService();
