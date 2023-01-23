const { Users } = require("../db");
const check = require("../middleware/utils");

const login = async (req, res) => {
  try {
    const { email, password } = req.body; //llega info formulario
    //se busca si existe email en la db
    const user = await Users.findOne({ where: { email } });
    console.log(user.password);
    //si no existe mandamos mensaje
    if (!user) return res.status(404).send({ msg: "Usuario no existe" });

    const checkPassword = await check.compare(password, user.password);
    console.log(checkPassword);
    const tokenSession = await check.tokenSign(user);

    if (checkPassword) {
      return res.status(202).json({ tokenSession, user });
    } else {
      return res.status(404).json({ msg: "constraseña invalida" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "error from singin" });
  }
};

module.exports = {
  login,
};
