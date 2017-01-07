
module.exports = (function() {

  function bubbleSort(array) {
    if(array.length === 0) {
      throw new Error('error, invalid length of array')
    }

    if(!Array.isArray(array)) {
      throw new Error('error, invalid data type on input')
    }

    for(let i = 0; i < array.length; i++) {
      for(let x = i+1; x < array.length; x++) {
        if(array[i] > array[x]) {
          let first = array[i];
          let second = array[x];
          array[i] = second;
          array[x] = first;
        }
      }
    }
    return array;
  }

  return {
    bubbleSort
  }

})()
