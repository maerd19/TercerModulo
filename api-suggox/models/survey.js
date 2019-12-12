const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const surveySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        // this field is ObjectId type because when referred in the product it will go to the User model
        user: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Survey", surveySchema);