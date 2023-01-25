const { Router } = require("express");
const express = require("express");
const axios = require("axios");

const {
  getProducts,
  createProducst,
  nameProduct,
  detailProduct,
  updateProduct
} = require("../Controller/products.controller.js");
const router = Router();
router.use(express.json());

router.get("/products", getProducts);
router.get("/productsName", nameProduct);
router.post("/createProducts", createProducst);
router.get("/detailProduct/:id", detailProduct);
router.get("/updateProduct/:id", updateProduct);
module.exports = router;
