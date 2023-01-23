const { Products } = require("../db");

const nameProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const infoDb = await Products.findOne({ where: { name } });
    const data = {
      name: infoDb.name,
      image: infoDb.image,
      price: infoDb.price,
      description: infoDb.description,
      stock: infoDb.stock,
    };
    return res.status(202).json({ data });
    console.log(allData);
  } catch (error) {
    console.log(error);
    return res.status(202).json({ msg: "error in nameProduct" });
  }
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Products.findAll();
    console.log(allProducts);
    res.status(202).send( allProducts );
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from get Producst");
  }
};

const createProducst = async (req, res) => {
  try {
    const { name, image, price, description } = req.body;
    if ((!name, !image, !price, !description)) {
      res.status(400).send("Faltan espacios por llenar");
    }
    const createProducts = await Products.create({
      image,
      price,
      description,
      name,
    });
    console.log(createProducts);
    res.status(202).json(createProducts);
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from createProducst");
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, price, description } = req.body;

    if (name || image || price || description) {
      await Products.update(
        { name, image, price, description },
        { where: { id: id } }
      );
      return res.status(200).json({ msg: "Producto Actualizado" });
    } else {
      return res
        .status(309)
        .json({ msg: "no se encuentran datos para actualizar" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  createProducst,
  nameProduct,
};
