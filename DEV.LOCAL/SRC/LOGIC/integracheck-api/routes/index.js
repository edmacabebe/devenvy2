let express = require('express');
let router = express.Router();
let debug = require('debug')('home');

debug('Loading index/home router');

/* GET home page. */
router.get('/', (req, res) => { 
    res.render('index', { title: 'Express' });
});
module.exports = router;
