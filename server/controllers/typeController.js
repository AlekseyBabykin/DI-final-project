const ApiError = require("../error/ApiError.js");
const {
  _createType,
  _getAllType,
  _deleteType,
} = require("../models/type.models.js");

const createType = async (req, res) => {
  // const { name } = req.body;

  const type = await _createType(req.body);
  console.log("createError");

  res.json(type);
};

const getAllType = async (req, res) => {
  const type = await _getAllType();
  res.json(type);
};

const deleteType = async (req, res) => {
  const { id } = req.params;
  console.log("id=>", id);
  const type = await _deleteType(id);
  res.json(type);
};

module.exports = { createType, getAllType, deleteType };
