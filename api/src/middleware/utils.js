
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//import jwt from "jsonwebtoken";

//funcion para generar un token a un usuario cada vez que se loguea
const tokenSign = async (user) => {
  //TODO : Generamos token
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    "autho",
    {
      expiresIn: 9999,
    }
  );
};

//passsporPlain = contraseña que entra
//hashPassword = contraseña guardada
//se comparan ambas
const compare = async (passsporPlain, hashPassword) => {
  return await bcrypt.compare(passsporPlain, hashPassword);
};

module.exports = {
  tokenSign,
  compare,
};
