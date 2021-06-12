const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    imaURL: String,
}, { timestamps: true });

const BlogModel = mongoose.model("BlogModel", BlogSchema);

module.exports = BlogModel;