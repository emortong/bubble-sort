const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
const should = chai.should;

describe('POST /bubble', () => {
  it('should sort the array and send it back', (done) => {
    request(app)
      .post('/bubble')
      .set('Accept', 'application/json')
      .send({
          "array": [2,5,6,2,9,10,25,1]
        })
      .end(function(err,res){
        if(err) {
          throw new Error(err);
        }
        expect([1,2,2,5,6,9,10,25])
        done()
      })
  })
})