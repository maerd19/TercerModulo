const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    lastname: {
      type: String,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    role: {
      type: Number,
      default: 0
    },
    password: {
      type: String,
      required: true
    },
    profilepic: {
      type: String
    },
    phone: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);