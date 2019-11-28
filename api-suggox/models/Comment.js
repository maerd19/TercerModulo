const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    options: {
      type: String,
      enum : ['denuncia','queja','reclamo','sugerencia','peticion','felicitacion'],
      default: 'sugerencia'
    },
    comment: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = model("Comment", commentSchema);