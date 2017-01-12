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
  it('should pass with a very large array', (done) => {
    let array = [10, 9, 2, 34, 4, 53, 6, 3, 2, 3, 4, 100, 2, 300, 21, 34, 5, 2, 32];
    expect(insertion_sort.insertion_sort(array)).to.deep.equal([ 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 9, 10, 21, 32, 34, 34, 53, 100, 300 ]);
    done();
  })
  it('should sort a decreasing array', (done) => {
    let array = [2000, 803, 566, 230, 112, 99, 98, 97, 81, 55, 43, 32, 23, 22, 21, 19, 32];
    expect(insertion_sort.insertion_sort(array)).to.deep.equal([ 19, 21, 22, 23, 32, 32, 43, 55, 81, 97, 98, 99, 112, 230, 566, 803, 2000 ]);
    done();
  })
  it('should sort an array with negative values and decimals', (done) => {
    let array = [10, -9, 22, -34, 4, 5.3, 6, 13, -2, 0];
    expect(insertion_sort.insertion_sort(array)).to.deep.equal([ -34, -9, -2, 0, 4, 5.3, 6, 10, 13, 22 ]);
    done();
  })

});