const NotFoundError = require('../models/not-found-error.model');

const express = require('express');
const router = express.Router();

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

module.exports = router;
