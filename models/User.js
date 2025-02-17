const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  website: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  serialNumber: { type: Number, unique: true, required: true },
  signupDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
