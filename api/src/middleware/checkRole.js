const { Users } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const checkRoleAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop(); //accedemos al token del user
    //verificamos que sea un token valido y obtenemos informacion de este
    const tokenData = jwt.verify(token, "autho");
    //verificamos con el id del token que se genera
    const userData = await Users.findByPk(tokenData.id);
    if (userData.role === "admin") {
      //si es admin dejamos pasar la siguiente funcion
      next();
    } else {
      return res
        .status(409)
        .json({ error: "No tienes permisos para generar esta accion" });
    }

    console.log(userData);
  } catch (error) {
    console.log(error);

    return res
      .status(409)
      .send({ error: "Debes estar loguado para generar esta accion" });
  }
};

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop(); //Accedemos a el token del user
    if (!token) return res.send("no estas logueado");
    const tokenData = jwt.verify(token, "autho"); //Verificamos que sea un token valido
    if (tokenData.id) {
      //Si es valido pasamos a la siguiente funcion
      next();
    } else {
      //si no es valido mandamos mensaje de error
      return res
        .status(409)
        .send({ error: "Debes estar logueado para realizar esta accion" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(409)
      .send({ error: "Debes estar logueado para realizar esta accion" });
  }
};

module.exports = {
  checkRoleAuth,
  checkAuth,
};
