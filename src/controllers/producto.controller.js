const productoService = require("../services/producto.service");

class ProductoController {
  async obtenerTodos(req, res) {
    try {
      const productos = await productoService.obtenerTodos();
      res.json(productos);
    } catch (err) {
      res.status(500).json({ error: "Error DB o Circuit Breaker" });
    }
  }

  async obtenerPorId(req, res) {
    try {
      const producto = await productoService.obtenerPorId(req.params.id);
      res.json(producto);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async crear(req, res) {
    try {
      const resultado = await productoService.crear(req.body);
      res.status(201).json({ message: "Producto creado", id: resultado.insertId });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async actualizar(req, res) {
    try {
      await productoService.actualizar(req.params.id, req.body);
      res.json({ message: "Producto actualizado" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async eliminar(req, res) {
    try {
      await productoService.eliminar(req.params.id);
      res.json({ message: "Producto eliminado" });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new ProductoController();
