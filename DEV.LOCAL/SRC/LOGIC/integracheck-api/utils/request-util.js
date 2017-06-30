/*
 * @Author: Zoilo Dela Cruz 
 * @Date: 2017-06-28 02:31:55 
 * @Last Modified by: Zoilo Dela Cruz
 * @Last Modified time: 2017-06-29 05:16:11
 */

const http = require('http');
const errors = require('./errors')();

/**
 * Create debugging mode for this library
 */
const debug = require('debug');
const log = debug('request-util');
log.enabled = true; // Set this true to see logs
log.log = console.log.bind(console);

exports = module.exports = httpRequest.request = 
    httpRequest['default'] = httpRequest;

/**
 * Default values for request
 */
let ecosystem = require('./ecosystem.json');
let config = {
    hostname: ecosystem.hostname,
    port: ecosystem.port,
    auth: 'test:test',
    path: '/',
    method: 'GET',
    headers: {},
    timeout: 100
};

//let isDebug = setMode;

//let isDebug = false;
/**
 * Create a request with given module name
 * @param{String} method - values [POST, PUT, GET, DELETE]
 * @arg{Array} [request, respond, {Function} next]
 * @return{Function}
 */

function httpRequest (module) {
    function request(){
        
        log('module ', module);
        var self = request;
        // turn the `arguments` into a proper Array
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
        }
        //log('config ', self.config);
        self.config.method = args[0];
        return genericMethod(self.config, args[0], args[1], args[2]);


    }
    request.config = setConfig(config);
    request.isDebug = setMode(config.isDebug);
    
    return request;
}

function setConfig(data){
    //log('DATA ', data);
    return data;
}

function setMode(isDebug){
    log.enable = isDebug;
}

function genericMethod(config, method, req, res){

    let options = setOptions(config, req);
    let request = http.request(options, (response) => {
        let statusCode = response.statusCode;
        let statusMessage = response.statusMessage;
        if ((statusCode >= 200) && (statusCode < 300)) {
            let stringReturn = '';
            response.on('data', (chunk) => {
                stringReturn += chunk;
            });
            response.on('end', () => {             
                let resReturn = stringReturn ? JSON.parse(stringReturn) 
                : {code: response.statusCode, message: 'OK', 
                content:response.statusMessage};
                
                res.send(resReturn);
            });
        } else {
        errors.sendError(req, res, statusCode, statusMessage);
        }
    });
    endRequest(request, JSON.stringify(req.body));
}

function setOptions(config, req) {
    log('authorization', req.header('authorization'));
    log('ECO ', ecosystem);
    //TODO: This is a hardcode refactor config.auth this to make this 
    //flexible it should depend on the header authorization 
    config.hostname = ecosystem.marklogic.hostname;
    config.port = ecosystem.marklogic.port;
    config.auth = 'admin:admin'; //TODO: it should in request browser
    config.headers = req.header;
    log(config);
  return config;
}

function endRequest(request, obj) {
    request.on('error', function (e) {
        debug(JSON.stringify(e));
    });
    request.write(obj);
    request.end();
}