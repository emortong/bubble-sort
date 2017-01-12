module.exports = (() => {

  const insertion_sort = (arr) => {
    let n = arr.length
    for(let i = 1; i < n; i++) {
      let value = arr[i];
      let hole = i;

      while(hole > 0 && arr[hole-1] > value) {
        arr[hole] = arr[hole-1];
        hole--;
      }
      arr[hole] = value;
    }
    return arr;
  }

  return {
    insertion_sort
  }

})();