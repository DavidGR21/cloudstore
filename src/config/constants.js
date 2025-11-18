module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "secretito123",
  JWT_EXPIRES_IN: "1h",
  PORT: process.env.PORT || 3000,
  CIRCUIT_BREAKER: {
    MAX_FAILURES: 3,
    RESET_TIME: 10000
  }
};
