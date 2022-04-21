const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    title: 'Express Server',
    current: new Date().toLocaleString(),
  });
});

module.exports = router;
