let express = require('express');
let router = express.Router();
let httpRequest = require('../utils/request-util')('documents');
let debug = require('debug')('routes:documents');
debug.enabled = true;

// TODO: Modify this and set this to a config file 
// and should depend on the environment
//httpRequest.config = { hostname: 'localhost', port: '30050' };
httpRequest.isDebug = true;

router.get('/', (req, res) => {
    let uri = req.query.uri;
    httpRequest.config.path = '/v1/documents?uri=' + uri;
    return httpRequest('GET', req, res);
});

router.put('/', (req, res) => {
    let uri = '/docs/zoilo.json';
    httpRequest.config.path = '/v1/documents?uri=' + uri;
    return httpRequest('PUT', req, res);
});

module.exports = router;