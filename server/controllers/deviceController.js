const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError.js");

const {
  _createDevice,
  _getAllDevice,
  _getOneDevice,
  _deleteDevice,
} = require("../models/device.models.js");
const { log } = require("console");

const createDevice = async (req, res, next) => {
  try {
    const { name, price, brand_id, type_id, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));

    const device = await _createDevice({
      name,
      price,
      brand_id,
      type_id,
      img: fileName,
    });

    res.json(device);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
};
const getAllDevice = async (req, res) => {
  const { brand_id, type_id } = req.query;
  console.log(req.query);
  let devices = await _getAllDevice(brand_id, type_id);
  return res.json(devices);
};

const getOneDevice = async (req, res) => {
  const device = await _getOneDevice(req.body);
  res.json(device);
};

const deleteDevice = async (req, res) => {
  const device = await _deleteDevice(req.body);
  res.json(device);
};

module.exports = { createDevice, getAllDevice, getOneDevice, deleteDevice };
