
module.exports = (function() {

  function bubbleSort(array) {
    if(array.length === 0) {
      throw new Error('error, invalid length of array')
    }

    if(!Array.isArray(array)) {
      throw new Error('error, invalid data type on input')
    }

    let swapped = true;
    while(swapped) {
      swapped = false;
      for(let i = 0; i < array.length; i++) {
          if(array[i] > array[i+1]) {
            let first = array[i];
            let second = array[i+1];
            array[i] = second;
            array[i+1] = first;
            swapped = true;
          }
        }
      }
      return array;
    }

    Array.prototype.myBubbleSort = function() {
      let swapped = true;
      while(swapped) {
        swapped = false;
        for(let i = 0; i < this.length; i++) {
            if(this[i] > this[i+1]) {
              let first = this[i];
              let second = this[i+1];
              this[i] = second;
              this[i+1] = first;
              swapped = true;
            }
          }
        }
        return this;
      }

  return {
    bubbleSort,
    myBubbleSort: Array.prototype.myBubbleSort,
  }

})()
