const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');

const shortUrlGenerator = require("../middlewares/urlCode.middlewares");
const UrlAccessor = require('../models/url.model');


router.get('/', (req, res) => {
    return UrlAccessor.getAllUrls()
        .then((response) => res.status(200).send(response),
            (error) => res.status(404).send(`Error finding url: ${error}`)).catch(()=> res.send(404).send("cant find"));
});

router.get('/:urlCode', (req, res) => {
    const urlCode = req.params.urlCode;
    return UrlAccessor.getUrlByCode(urlCode)
        .then((response) => {
            if (response) {
                res.redirect(301, response.originalUrl)
            } else {
                res.status(404).send("Can't find url")
            }
        },
            (error) => res.status(404).send(`Error finding url. ${error}`))
        // .then((response) => res.redirect(301, response.originalUrl),
        //     (error) => res.status(404).send(`Error finding url: ${error}`));
});

router.patch('/:urlCode', async (req, res) => {
    const modifiedDate = new Date();
    let url = await UrlAccessor.getUrlByCode(req.params.urlCode);

    if (url) {
        return UrlAccessor.updateUrlByCode(req.params.urlCode, {
            originalUrl: req.body.originalUrl,
            modifiedAt: modifiedDate
        }).then(() => res.status(200).send(`Updated url ${url.urlCode} successfully`),
            (error) => res.status(404).send(`Error updating url code ${error}`))
    } else {
        return res.status(400).send("Url code does not exist")
    }
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