const express = require("express");
const b_router = express.Router();
const {
  createBrand,
  getAllBrand,
  deleteBrand,
} = require("../controllers/brandController.js");

b_router.post("/", createBrand);

b_router.get("/", getAllBrand);
b_router.delete("/:id", deleteBrand);

module.exports = { b_router };
