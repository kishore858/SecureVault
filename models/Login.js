const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  website: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Login", LoginSchema);
