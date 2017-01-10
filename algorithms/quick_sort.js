
module.exports = (() => {

  const quick_sort = (arr) => {
    let pivot = arr[0];
    if(arr.length <= 1) {
      console.log('arr: ', arr);
      return arr;
    }

    let left = [];
    let right = [];


    for(var i = 1; i < arr.length; i++) {
      if(arr[i] < pivot) {
        left.push(arr[i])
      } else if( arr[i] > pivot) {
        right.push(arr[i])
      }
    }

    return quick_sort(left).concat(pivot, quick_sort(right))
  }

  quick_sort([10, 9, 2, 34, 4, 53, 6, 3])

  return {
    quick_sort,
  }

})();