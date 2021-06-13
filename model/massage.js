const mongoose = require("mongoose");

const MassageSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    massage: String
}, { timestamps: true });

const MassageModel = mongoose.model("massage", MassageSchema);

module.exports = MassageModel;