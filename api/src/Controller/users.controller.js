const { Users } = require("../db");

const createUser = async (req, res) => {
  try {
    //llegan los datos de registro
    const { username, email, image, password, role } = req.body;
    console.log(req.body);
    if (!email || !username || !password)
      return res.status(404).json({ msg: "Faltan datos por llenar" });
    //buscamos si existe un correo igual
    const userFound = await Users.findOne({ where: { email } });
    //validamos 
    if (!userFound) {
      //se crean con las propiedades
      const createUser = await Users.create({
        username,
        email,
        password,
        image,
        role,
      });
    return  res
        .status(202)
        .json({ msg: "Usuario create Succesfully :D", createUser });
    } else {
      return res
        .status(404)
        .json({ msg: "Ya se encuentra registrado el email" });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ mss: "Error from CreateUser Controller" });
  }
};

const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll();
    return res.status(202).json(allUsers);
  } catch (error) {
    console.log(error);
   return  res.status(404).send({ msg: "Error from getUsers" });
  }
};

const updateUser = async (req, res) => {
  try {
    //traemos id por params
    const { id } = req.params;
    //datos para actualizar
    const { username, image } = req.body;
    //validamos
    if (username || image) {
      //actualiza
       await Users.update(
        { username, image },
        { where: { id: id } }
        );
   return     res.status(202).json({ msg: "User actualizado" });
    } else {
     return  res.status(404).send({ msg: "no se encuentran datos para actualizar" });
    }

  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "Error from updateUser" });
  }
};

const deleteUser = async (req, res) => {
  try {
    //sacamos id por params
    const { id } = req.params;
    //eliminamos con la propiedad destroy donde coincida el id
    await Users.destroy({ where: { id } });
    //restornamos estado
    return res.status(200).send({msg : "Usuario eliminado con exito"})
  } catch (error) {
    console.log(error);
    return res.send(202).send({ msg: "error from deleteUser" });
  }
};

module.exports = {
  updateUser,
  getUsers,
  createUser,
  deleteUser,
};
