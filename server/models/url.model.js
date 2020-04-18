const mongoose = require("mongoose");
const UrlSchema = require("./url.schema").urlShortSchema;


const UrlModel = mongoose.model("UrlShort", UrlSchema);


function insertUrl(url) {
    return UrlModel.create(url);
}

function getUrlByCode(urlCode) {
    return UrlModel.findOne({urlCode: urlCode}).exec();
}

function updateUrlByCode(urlCode, updateInfo) {
    return UrlModel.updateOne({urlCode: urlCode}, {
            $set: {
                originalUrl: updateInfo.originalUrl,
                modifiedAt: updateInfo.modifiedAt
            }
        }).exec();
}

function deleteUrlByCode(urlCode) {
    return UrlModel.deleteOne({urlCode: urlCode}).exec();
}

module.exports = {
    insertUrl,
    getUrlByCode,
    updateUrlByCode,
    deleteUrlByCode,
};