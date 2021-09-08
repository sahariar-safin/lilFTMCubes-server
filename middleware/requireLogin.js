const admin = require('firebase-admin');
var serviceAccount = require("./lil-cudes-firebase-adminsdk-64289-aaa897afce.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log(authorization);
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    admin.auth().verifyIdToken(token)
        .then(decodedToken => {
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(401).json({ error: "you must be logged in" });
        });
};