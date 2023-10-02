const ApiError = require("../error/ApiError.js");
const userRegistration = async (req, res) => {};

const userLogin = async (req, res) => {};
const userCheck = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(ApiError.badRequest("not id"));
  }
  res.json(id);
};

module.exports = { userRegistration, userCheck, userLogin };
