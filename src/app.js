const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const sseRouter = require('./router');
const { getStatus, changeStatus } = require('./status');

app.use(cors(corsOptions));

app.use(express.static('src/client'));
app.use('/admin', express.static('src/admin'));
app.get('/sse', sseRouter);

app.post('/change', (req, res) => {
  const newStatus = req.query.status;
  console.log('New status: ', newStatus);
  res.send('Status changed');
  changeStatus(newStatus);
  console.log(getStatus());
});

app.get('/status', (req, res) => {
  console.log(getStatus());
  res.send('Libre');
});
module.exports = app;
