const express = require("express");
const mongoose = require("mongoose");
const urlShort = require('./controllers/url.controller');

const mongoURI = "mongodb://127.0.0.1/url-shortner";
const PORT = 3001;
const app = express();

const connectOptions = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
};
//
// mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
        if (err) console.log(`Error`, err);
        console.log(`Connected to MongoDB`);
});

const db = mongoose.connection;


// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/urlShort', urlShort);

app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});