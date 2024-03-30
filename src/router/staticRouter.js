const express = require('express');

const router = express.Router();

router.use(express.static('src/client'));
router.use('/admin', express.static('src/admin'));

module.exports = router;
