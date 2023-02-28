const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const errorHandlingMiddleware = require('./middlewares/error-handling.middleware');
const apiRouter = require('./routers/api.router');

app.use('/api', apiRouter);

app.use(errorHandlingMiddleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
