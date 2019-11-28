const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    event_name: {
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
    }
  },
  { timestamps: true }
);

module.exports = model("Event", eventSchema);