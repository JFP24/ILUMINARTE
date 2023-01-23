const { Router } = require("express");
const express = require("express");

const {
  getCategories,
  createCategories,
} = require("../Controller/categories.controller.js");
const router = Router();
router.use(express.json());

router.get("/categories", getCategories);
router.post("/createCategories", createCategories);

module.exports = router;
