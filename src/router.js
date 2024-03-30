const express = require('express');
const sseEvents = require('./sse/sse');

const router = express.Router();

router.use('/', sseEvents);

module.exports = router;
