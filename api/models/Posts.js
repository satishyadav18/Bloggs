const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            // default: "",
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        categories: {
            type: [String],
            default: [],
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);