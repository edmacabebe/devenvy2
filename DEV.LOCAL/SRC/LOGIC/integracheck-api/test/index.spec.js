let assert = require('assert');

//Require dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let routes = require('../app');

/* jshint ignore:start */
//let should = chai.should();
let should = require('should');
/* jshint ignore:end */

chai.use(chaiHttp);

describe('String#split', function(){
  it('should return an array', function(done){
    assert(Array.isArray('a,b,c'.split(',')));
    done();
  });
});

describe('index', function() {
    it('should respond to get http 200 ', (done) => {
        chai.request(routes).get('/').end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
});
