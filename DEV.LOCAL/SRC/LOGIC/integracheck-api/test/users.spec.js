let assert = require('assert');

//Require dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let routes = require('../app');

//This may not be call but it is required for this test
/* jshint ignore:start */
let should = chai.should(); 
/* jshint ignore:end */

chai.use(chaiHttp);

describe('String#split', function(){
  it('should return an array', function(done){
    assert(Array.isArray('a,b,c'.split(',')));
    done();
  });
});

describe('users', () => {
    it('should respond to get http 200 ', (done) => {
        chai.request(routes).get('/users').end((err, res) => { 
          res.should.have.status(200);
          done();
        });
    });

    it('should respond to get http 404 ', (done) => {
        chai.request(routes).get('/usersa').end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
});