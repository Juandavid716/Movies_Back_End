const express = require("express");
const app = express();

app.use("/server/usuarios", require("./usuarios.routes"));
app.use("/server/login", require("./login.routes"));

module.exports = app;
