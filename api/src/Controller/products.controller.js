const { Products } = require("../db");

const nameProduct = async (req, res) => {
  try {
    //obtenemos nombre por query
    const { name } = req.query;
    //buscamos en la DB si existe un nombre igual
    const infoDb = await Products.findOne({ where: { name } });
    //validamos si existe envia la info
    if(infoDb){
      const data = {
        name: infoDb.name,
        image: infoDb.image,
        price: infoDb.price,
        description: infoDb.description,
        stock: infoDb.stock,
      };
      //console.log(allData);
      return res.status(202).send( data );
    }else{
      //si no existe devuelve mensaje de error
      return res.status(400).send({msg : "No existe este producto"})
    }
  } catch (error) {
    console.log(error);
    return res.status(202).json({ msg: "error in nameProduct" });
  }
};

const getProducts = async (req, res) => {
  try {
    //traemos todos los producsto de la base de datos
    const allProducts = await Products.findAll();
   // console.log(allProducts);
   //enviamos un arreglo
    res.status(202).send( allProducts );
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from get Producst");
  }
};

//HACER LA RELACION CON LAS CATEGORIAS
const createProducst = async (req, res) => {
  try {
    //obtenemos informacion desde body
    const { name, image, price, description } = req.body;
    //validamos que no halla ningun espacio vacio
    if ((!name, !image, !price, !description)) {
      res.status(400).send("Faltan espacios por llenar");
    }
    //creamos en la base de datos
    const createProducts = await Products.create({
      image,
      price,
      description,
      name,
    });
    console.log(createProducts);
    //devolvemos el producto creado
    res.status(202).json(createProducts);
  } catch (error) {
    console.log(error);
    res.status(404).json("Error from createProducst");
  }
};

const updateProduct = async (req, res) => {
  try {
    //Obtenemos el id por params
    const { id } = req.params;
    //Obtenemos la informacion a actualizar por body
    const { name, image, price, description } = req.body;
//actualizamos cualquier informaicon
    if (name || image || price || description) {
      await Products.update(
        { name, image, price, description },
        { where: { id: id } }
      );
      //respondemos con un mensaje
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

//INCLUIR LAS CATEGORIAS EN LA RELACION PARA EL DETALLE
const detailProduct = async (req, res)=>{
  try {
    const { id } = req.params;
    const infoDb = await Products.findOne({ where: { id }});
    const data = {
      name: infoDb.name,
      image: infoDb.image,
      price: infoDb.price,
      description: infoDb.description,
      stock: infoDb.stock,
    };
    console.log(data)
return res.status(202).send(data)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getProducts,
  createProducst,
  nameProduct,
  updateProduct,
  detailProduct
};
