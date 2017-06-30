let express = require('express');
let router = express.Router();
let debug = require('debug')('user');

debug('Loading user router');
/* GET users listing. */
router.get('/', (req, res) => { 
  res.send('successfull');
});

module.exports = router;
