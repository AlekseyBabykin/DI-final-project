const { db } = require("../config/db.js");

const _createBasket = ({ user_id }) => {
  return db("basket").insert({ user_id }), ["id", "user_id]"];
};

module.exports = { _createBasket };
