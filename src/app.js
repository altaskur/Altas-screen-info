const express = require('express');
const cors = require('cors');
const sseRouter = require('./router/sseRouter');
const staticRouter = require('./router/staticRouter');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/', staticRouter);
app.get('/sse', sseRouter);

module.exports = app;
