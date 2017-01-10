module.exports = (() => {

  const merge = (left, right, arr) => {
    let nL = left.length;
    let nR = right.length;
    let i = 0; //smallest unpicked in Left
    let j = 0; //smallest unpicked in Right
    let k = 0; //index of position to be filled in arr

    while(i < nL && j < nR) { // while it has not gone through left nor right
      if(left[i] <= right[j]) { // grab the smallest and put it first
        arr[k] = left[i];
        i++
      } else {
        arr[k] = right[j];
        j++
      }
      k++
    }

    while(i < nL) { // if one side is done put the resting nums of the other side next
      arr[k] = left[i]
      i++
      k++
    }

    while(j < nR) {
      arr[k] = right[j]
      j++
      k++
    }
    console.log('arr: ', arr);
    return arr;
  }

  const merge_sort = (arr) => {
    let n = arr.length;

    if(n < 2) { // base case
      return;
    }

    let mid;

    if(n%2 === 0) { // get the middle of the array ans plit it
      mid = (n/2);
    } else {
      mid = (n-1)/2;
    }

    let left = [];
    let right = [];

    for(let i = 0; i < mid; i++) { //partision
      left[i] = arr[i];
    }

    for(let j = mid; j < n; j++) { // partiison
      right[j-mid] = arr[j]

    }

    merge_sort(left); // break all the left up recursively
    merge_sort(right); // break all the right up recursively
    return merge(left, right, arr); // pass in the left and right and array, on each recursion
  }

  return {
    merge_sort
  }

})();