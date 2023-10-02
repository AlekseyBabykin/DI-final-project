const express = require("express");
const u_router = express.Router();
const {
  userRegistration,
  userCheck,
  userLogin,
} = require("../controllers/userController.js");

u_router.post("/registration", userRegistration);
u_router.post("/login", userLogin);
u_router.get("/auth", userCheck);

module.exports = { u_router };
