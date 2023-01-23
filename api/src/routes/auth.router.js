const { Router } = require("express");
const express = require("express");
const { login } = require("../Controller/auth.controller.js");
const router = Router();

router.post("/login", login);
module.exports = router;
