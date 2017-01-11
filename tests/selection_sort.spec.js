const chai = require('chai');
const selection_sort = require('../algorithms/selection_sort');
const expect = chai.expect;
const should = chai.should;


describe('selection_sort', function () {
  it('should sort an array', (done) => {
    let array = [10, 9, 2, 50, 20, 34, 3, 1];
    expect(selection_sort.selection_sort(array)).to.deep.equal([1, 2, 3, 9, 10, 20, 34, 50]);
    done();
  })

});