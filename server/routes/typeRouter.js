const express = require("express");
const t_router = express.Router();

const {
  createType,
  getAllType,
  deleteType,
} = require("../controllers/typeController.js");

t_router.post("/", createType);

t_router.get("/", getAllType);

t_router.delete("/:id", deleteType);

module.exports = { t_router };
