const express = require("express");
const b_router = express.Router();
const checkRole = require("../middleware/checkRoleMiddleware.js");
const {
  createBrand,
  getAllBrand,
  deleteBrand,
} = require("../controllers/brandController.js");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware.js");

b_router.post("/", checkRole, createBrand);

b_router.get("/", getAllBrand);
b_router.delete("/:id", deleteBrand);

module.exports = { b_router };
