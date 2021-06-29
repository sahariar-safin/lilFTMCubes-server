const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    imgURL: String,
}, { timestamps: true });

const BlogModel = mongoose.model("BlogModel", BlogSchema);

module.exports = BlogModel;