const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const sseRouter = require('./router');

app.use(cors(corsOptions));

app.use(express.static('src/client'));
app.get('/sse', sseRouter);
module.exports = app;
