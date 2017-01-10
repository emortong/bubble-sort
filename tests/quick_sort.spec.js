const chai = require('chai');
const quick_sort = require('../algorithms/quick_sort');
const expect = chai.expect;
const should = chai.should;


describe('quick_sort', function () {
  it('should sort an array', (done) => {
    let array = [10, 9, 2, 34, 4, 53, 6, 3];
    console.log(quick_sort.quick_sort(array));
  })

});