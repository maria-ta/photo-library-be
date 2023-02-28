const express = require('express');
const router = express.Router();

const axios = require('axios').default;

const NotFoundError = require('../models/not-found-error.model');

router.get('/config', (req, res) => {
    const appName = process.env.UNSPLASH_APP_NAME;
    if (appName) {
        res.json({
            appName
        });
    } else {
        throw new NotFoundError('Config not found');
    }
});

router.get('/photos*', (req, res, next) => {
    const unsplashApi = process.env.UNSPLASH_API;
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (unsplashApi && accessKey) {
        const url = req.url;

        axios.get(url, {
            baseURL: unsplashApi,
            headers: {
                'Accept-Version': 'v1',
                'Authorization': 'Client-ID ' + accessKey
            }
        })
            .then((apiResponse) => {
                res.json(apiResponse.data);
            })
            .catch((err) => {
                console.error(err);
                next(err);
            });
    } else {
        throw new Error();
    }
});

module.exports = router;
