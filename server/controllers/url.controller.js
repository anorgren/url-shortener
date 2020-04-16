const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');

const shortUrlGenerator = require("../middlewares/urlCode.middlewares");
const UrlAccessor = require('../models/url.model');


router.get('/', (req, res) => {
    return UrlAccessor.getAllUrls()
        .then((response) => res.status(200).send(response),
            (error) => res.status(404).send(`Error finding url: ${error}`));
});

router.get('/:urlCode', (req, res) => {
    const urlCode = req.params.urlCode;
    return UrlAccessor.getUrlByCode(urlCode)
        .then((response) => res.status(200).send(response),
            (error) => res.status(404).send(`Error finding url: ${error}`));
});

router.patch('/:urlCode', async (req, res) => {
    // try {
    //     let foundUrl = await UrlAccessor.getUrlByCode(req.params.urlCode)
    //     if (foundUrl) {
    //         return UrlAccessor.updateUrlByCode(foundUrl._id, 'test')
    //             .then(res.status(200).send("Updated object"));
    //     }
    // } catch (error) {
    //     return res.status(404).send("Cant find url")
    // }

    const modifiedDate = new Date();
    return UrlAccessor.updateUrlByCode(req.params.urlCode, {
        originalUrl: req.body.originalUrl,
        modifiedAt: modifiedDate})
        .then(() => res.status(200).send(`Updated url code ${req.params.urlCode} successfully`),
            error => res.status(404).send(`Error updating url: ${error}`));

    // try {
    //     let urlItem = await UrlAccessor.getUrlByCode(req.params.urlCode);
    //     if (urlItem) {
    //         return UrlAccessor.updateUrlByCode(req.params.urlCode, req.body.originalUrl)
    //             .then((response) => res.status(200).send(`Updated Url ${response}`))
    //     }
    // } catch (error) {
    //     res.status(404).send('Error updating url')
    // }

});

router.delete('/:urlCode', (req, res) => {
    UrlAccessor.deleteUrlByCode(req.params.urlCode);
    return res.status(200).send("Success!");
});

// route to create a URL
router.post('/', (req, res) => {
    const {originalUrl, baseUrl, isBranded} = req.body;

    let urlCode;
    if (!validUrl.isUri(baseUrl)) {
        return res.status(404).send("Invalid base Url.")
    }

    if (isBranded) {
        urlCode = req.body.urlCode;
    } else {
        urlCode = shortUrlGenerator.generate();
    }

    const completeShortenedUrl = baseUrl + "/" + urlCode;
    const currentTime = new Date();

    const urlItem = {
        originalUrl: originalUrl,
        urlCode: urlCode,
        baseUrl: baseUrl,
        shortUrl: completeShortenedUrl,
        createdAt: currentTime,
        modifiedAt: currentTime,
        isBranded: isBranded
    };

    return UrlAccessor.insertUrl(urlItem)
        .then((response) => res.status(200).send(response),
            error => res.status(`error creating item ${error}`))
});


module.exports = router;