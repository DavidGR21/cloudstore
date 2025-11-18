const authService = require("../services/auth.service");

class AuthController {
  login(req, res) {
    try {
      const resultado = authService.login(req.body);
      res.json(resultado);
    } catch (err) {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  }
}

module.exports = new AuthController();
