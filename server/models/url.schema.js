const mongoose = require("mongoose");
const {Schema} =  mongoose;


exports.urlShortSchema = new Schema({
    isBranded: {type: Boolean, default: false},
    originalUrl: String,
    baseUrl: String,
    urlCode: {type: String, index: true},
    shortUrl: {type: String},
    createdAt: {type: Date, default: Date.now},
    modifiedAt: {type:Date, default: Date.now}
}, {collection: 'shortenedUrls'});
