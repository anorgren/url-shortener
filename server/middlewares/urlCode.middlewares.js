const shortId = require('shortid');


module.exports = {
    generate: function () {
        return shortId.generate();
    }
};