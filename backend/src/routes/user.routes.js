"use strict";
const express = require("express");

const usuarioController = require("../controllers/user.controller");
const autheMiddleware = require("../middlewares/authe.middleware");

const router = express.Router();

router.get("/", usuarioController.getUsers);
router.post("/", autheMiddleware.isAdmin, usuarioController.createUser);
router.get("/:id", usuarioController.getUserById);
router.put("/:id", autheMiddleware.isAdmin, usuarioController.updateUser);
router.delete("/:id", autheMiddleware.isAdmin, usuarioController.deleteUser);

module.exports = router;
