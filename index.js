
const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const blog = require("./routes/blog.js");

const mongoose = require("mongoose");
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blog", blog);


const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((error) => {
        console.log(error.message);
    });

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
});