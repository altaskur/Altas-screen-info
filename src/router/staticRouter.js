const express = require('express');

const router = express.Router();

router.use(express.static('src/client'));
router.use('/admin', express.static('src/admin'));
router.use('/assets/', express.static('src/static'));

module.exports = router;
