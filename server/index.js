const express = require("express");
const mongoose = require("mongoose");
const urlShort = require('./controllers/url.controller');
const path = require('path');

const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1/url-shortner";
const PORT = process.env.PORT || 3001;
const app = express();

const connectOptions = {
    keepAlive: true,
    useNewUrlParser: true
};

mongoose.connect(mongoURI, connectOptions, (err, db) => {
        if (err) console.log(`Error`, err);
        console.log(`Connected to MongoDB ${db}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,x-access-token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});
app.use('/api/urlShort', urlShort);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});