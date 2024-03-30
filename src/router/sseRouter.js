const express = require('express');
const { sseEvents } = require('../sse/sse');

const router = express.Router();

router.get('/', sseEvents);

module.exports = router;
