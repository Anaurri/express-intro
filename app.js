const express = require('express');
const logger = require('morgan');

const app = express();

/* Middlewares */
app.use(logger('dev'));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
