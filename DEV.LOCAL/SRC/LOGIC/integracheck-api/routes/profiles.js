let express = require('express');
let router = express.Router();
let debug = require('debug')('user');

debug('Loading profiles router');
/* GET profiles listing. */
/*router.get('/', (req, res, next) => { 
  res.send('successfull'); 
});*/
router.get('/', (req, res) => { 
  res.send('successfull'); 
});

module.exports = router;