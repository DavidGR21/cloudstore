const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/constants");

class AuthService {
  generarToken(usuario) {
    return jwt.sign({ user: usuario }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  }

  login(credentials) {
    // Aquí podrías validar contra la base de datos
    // Por ahora mantiene la lógica simple
    const token = this.generarToken("admin");
    return { token };
  }
}

module.exports = new AuthService();
