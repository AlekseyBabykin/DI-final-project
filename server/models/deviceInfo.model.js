const { db } = require("../config/db.js");

const _createDeviceInfo = (title, description, device_id) => {
  return (
    db("device_info").insert(title, description, device_id),
    ["id", "title", "description", "device_id"]
  );
};
const _getDeviceinfo = (device_id) => {
  return db("device_info")
    .select("id", "title", "description", "device_id")
    .orderBy("device_id");
};

module.exports = { _createDeviceInfo, _getDeviceinfo };
