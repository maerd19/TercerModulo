 const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const answerSchema = new mongoose.Schema(
    {
        simple_answer: {
            type: Boolean,
            required: true
        },
        long_answer: {
            type: String,
            required: true            
        },
        user: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        survey: {
            type: ObjectId,
            ref: 'Survey',
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Answer", answerSchema);