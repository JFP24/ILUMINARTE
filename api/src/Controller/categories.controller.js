const axios = require("axios");

const { Categories } = require("../db");

const getCategories = async (req, res) => {
  try {
    const allCategories = await Categories.findAll();
    console.log(allCategories);
    res.status(202).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from getCategories");
  }
};

const createCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const categorieName = Categories.findOne({ where: name });

    if (categorieName) {
      res.status(401).send("Ya existe una categoria con ese nombre");
    }
    if (!name) {
      res.status(400).send("Faltan espacios por llenar");
    }
    const createCategories = await Categories.create({
      name,
    });
    console.log(createCategories);
    res.status(202).json(createCategories);
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from createCategories");
  }
};

module.exports = {
  getCategories,
  createCategories,
};
