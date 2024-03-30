const express = require('express');
const { changeStatus } = require('../status');

const router = express.Router();

router.post('/', (req, res) => {
  const { status } = req.body;
  if (status) {
    changeStatus(status);
  }

  res.status(200).json({ status: 'changed' });
});

module.exports = router;
