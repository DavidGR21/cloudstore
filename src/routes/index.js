const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const productoRoutes = require("./producto.routes");

router.use("/auth", authRoutes);
router.use("/productos", productoRoutes);

module.exports = router;
