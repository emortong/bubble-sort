const chai = require('chai');
const insertion_sort = require('../algorithms/insertion_sort');
const expect = chai.expect;
const should = chai.should;


describe('insertion_sort', function () {
  it('should sort an array', (done) => {
    let array = [10, 9, 2, 34, 4, 53, 6, 3];
    expect(insertion_sort.insertion_sort(array)).to.deep.equal([ 2, 3, 4, 6, 9, 10, 34, 53 ]);
    done();
  })

});