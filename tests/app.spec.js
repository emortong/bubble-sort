const chai = require('chai');
const app = require('../app');
const expect = chai.expect;
const should = chai.should;

describe('bubble sort', () => {
  it('it is a function that sorts an array', () => {
    let array = [9,7,12,3,2,20];
    let bubbleSortedArray = app.bubbleSort(array);
    expect(bubbleSortedArray).to.deep.equal([2,3,7,9,12,20]);
  })
  it('should pass with a decreasing array', () => {
    let array = [100,90,50,20,4,2];
    let bubbleSortedArray = app.bubbleSort(array);
    expect(bubbleSortedArray).to.deep.equal([2,4,20,50,90,100]);
  })
  it('should pass with a very large array array', () => {
    let array = [100,90,50,20,4,2, 30, 40 ,200, 3, 31, 32 ,42, 56, 21, 45, 89, 90, 101, 2000, 21, 32, 40, 10000, 2.5];
    let bubbleSortedArray = app.bubbleSort(array);
    expect(bubbleSortedArray).to.deep.equal([ 2,2.5,3,4,20,21,21,30,31,32,32,40,40,42,45,50,56,89,90,90,100,101,200,2000,10000]);
  })
  it('should throw error if array is empty', () => {
    let array = [];
    let err = new Error('error, invalid length of array')
    expect(app.bubbleSort.bind(this, array)).to.throw('error, invalid length of array');
  })
  it('should throw error if input is not an array', () => {
    let array = 'hello';
    expect(app.bubbleSort.bind(this, array)).to.throw('error, invalid data type on input');
  })
})
