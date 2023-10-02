const express = require("express");
const d_router = express.Router();
const {
  createDevice,
  getAllDevice,
  getOneDevice,
  deleteDevice,
} = require("../controllers/deviceController.js");

d_router.post("/", createDevice);

d_router.get("/", getAllDevice);
d_router.get("/:id", getOneDevice);
d_router.delete("/:id", deleteDevice);

module.exports = { d_router };
