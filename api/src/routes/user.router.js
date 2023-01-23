const { Router } = require("express");
const express = require("express");
const router = Router();
router.use(express.json());
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../Controller/users.controller");

const { checkRoleAuth, checkAuth } = require("../middleware/checkRole");

router.post("/signup", createUser);
router.get("/users", checkRoleAuth, getUsers);
router.put("/updateUser/:id", checkAuth, updateUser);
router.delete("/deleteUser/:id", checkRoleAuth, deleteUser);

module.exports = router;
