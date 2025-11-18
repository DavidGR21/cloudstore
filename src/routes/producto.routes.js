const express = require("express");
const router = express.Router();
const productoController = require("../controllers/producto.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.get("/", verifyToken, productoController.obtenerTodos.bind(productoController));
router.get("/:id", verifyToken, productoController.obtenerPorId.bind(productoController));
router.post("/", verifyToken, productoController.crear.bind(productoController));
router.put("/:id", verifyToken, productoController.actualizar.bind(productoController));
router.delete("/:id", verifyToken, productoController.eliminar.bind(productoController));

module.exports = router;
