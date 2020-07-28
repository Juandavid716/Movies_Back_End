const express = require("express");
const app = express();
const Usuarios = require("../models/usuarios");
const bcrypt = require("bcryptjs");
const { verificarToken } = require("../middlewares/autenticacion");

app.get("/", verificarToken, async (req, res) => {
  await Usuarios.find((err, usuarios) => {
    res.json({
      usuarios,
    });
  });
});

app.post("/", async (req, res) => {
  let body = req.body;

  let nuevousuario = new Usuarios({
    nombre: body.nombre,
    correo: body.correo,
    clave: bcrypt.hashSync(body.clave, 10),
  });

  await nuevousuario.save((err, usuario) => {
    if (err) {
      return res.status(500).json({
        err,
      });
    }

    res.json({
      usuario,
    });
  });
});

module.exports = app;
