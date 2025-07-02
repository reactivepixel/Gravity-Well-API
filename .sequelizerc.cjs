const path = require("path");

module.exports = {
  // ignore prettier
  // prettier-ignore
  "config": path.resolve(__dirname, 'db', 'config', 'config.js'),
  "models-path": path.resolve(__dirname, "db", "models"),
  "seeders-path": path.resolve(__dirname, "db", "seeders"),
  "migrations-path": path.resolve(__dirname, "db", "migrations"),
};
