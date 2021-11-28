const mongoose = require("mongoose");

const postScehma = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "users", required: true },
    title: { type: String, require: true },
    content: { type: String, require: true },
    like: [{ type: String }],
    comment: [{ type: Object }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postScehma);
