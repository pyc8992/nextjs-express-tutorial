const express = require('express');
const router = express.Router();
const testCtrl = require('../controller/test');

router.get('/', 
  testCtrl.downloadFiles);

module.exports = router;