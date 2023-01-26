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
   const categorieName = await Categories.findOne({ where : {name} });

if(!name) return res.status(404).send("Faltan espacios por llenar")

    if (!categorieName) {
      const createCategories = await Categories.create({
        name,
      });
      res.status(202).json(createCategories);
    }else {
      res.status(401).send("Ya existe esta categoria");
    }
 

   
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from createCategories");
  }
};

module.exports = {
  getCategories,
  createCategories,
};
