const express = require('express')
const app = express()
require('dotenv').config()
const path = require("path");
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const port = process.env.PORT || 5000;
const requireLogin = require('./middleware/requireLogin')

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const documents = client.db(`documents`).collection("documents");

    app.get('/documents/:type', (req, res) => {
        documents.find({ type: req.params.type })
            .toArray((err, results) => {
                res.send(results);
            })
    })

    app.patch("/documents/update/:type", requireLogin, (req, res) => {
        console.log(req.body, "working")
        const updateData = req.body;
        documents.updateOne(
            { type: req.params.type },
            { $set: { ...updateData } },
            { upsert: true },
            (err, results) => {
                res.send(results);
            })
    });

});

// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/build")));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`)
})