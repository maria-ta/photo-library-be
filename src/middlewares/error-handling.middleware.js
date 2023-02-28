const NotFoundError = require('../models/not-found-error.model');

module.exports = function (err, req, res, next) {
    if (err instanceof NotFoundError) {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Server error' });
    }
}
