const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    username: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema, "users");
