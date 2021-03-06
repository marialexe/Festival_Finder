var express = require('express');
var router = express.Router();
var path = require('path');

//hand api calls to routers
router.use('/api/festivals', require('./festivals.js'));
router.use('/api/users/festivals', require('./users.js'));

//landing page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;
