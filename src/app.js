const express = require('express');
const cors = require('cors');
const sseRouter = require('./router/sseRouter');
const staticRouter = require('./router/staticRouter');
const statusRouter = require('./router/statusRouter');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', staticRouter);
app.use('/sse', sseRouter);
app.use('/change', statusRouter);

module.exports = app;
