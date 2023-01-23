require("dotenv").config();
const { Router } = require("express");
const router = Router();

//Importo todos los routers;
const products = require("./products.router");
const categories = require("./categories.router");
const users = require("./user.router");
const auth = require("./auth.router");

//Configuro todos los routers
router.use("/api/v1/", products);
router.use("/api/v1/", categories);
router.use("/api/v1/", users);
router.use("/api/v1/", auth);
module.exports = router;
