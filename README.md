
# Sorting Algorithms

There are many algorithms that deal with sorting collections of data, some are more efficient than others, therefore better to implement to reduce the time and space required for execution. In this project you can see the implementation of Bubble, Quick, Merge, Insertion, and Selection sort, together with a brief analysis of each.

## Bubble Sort

Bubble Sort is one of the most basic forms of sorting and it was given that name because of the 'bubbling' effect it has when sorting the data. The trick to remembering bubble sort is to visualize your array being vertical rather than horizontal. If smaller values are "deeper" in the array, they will "rise" to the top until they are the smallest value. If larger values are "higher" in the array, they will sink to the bottom until they are the largest value.

#### Best Case
 O(n)

#### Average Case
O(n^2)

#### Worst Case
O(n^2)

#### Pseudocode Implementation

```
procedure bubble-sort(arr : list of sortable elements) is
  swapped <- true;
  while(swapped)
    swapped <- false;
    for i <- 1 to length(arr) do
      if(arr[i] > arr[i+1]) then
        swap(arr[i-1], arr[i]);
        swapped <- true
      end if
    end for loop
  end while loop
  return arr;
end procedure
```

## Quick Sort

Quick Sort is a divide and conquer algorithm, it mostly acts as the most time efficient sorting algorithm. Quick sort first declares a pivot value and compares all the elements of the array against that value, if the element is less than the pivot, it will be placed in a newly created low sub-array, if it is greater in a high sub-array. It does this until the array reaches a  length of 0 or 1, and then it recusrively joins the low and high sub-arrays back again.

#### Best Case
 O(n log n) (simple partition) or O(n) (three-way partition and equal keys)

#### Average Case
O(n log n)

#### Worst Case
O(n^2)

#### Pseudocode Implementation

```
procedure quicksort(arr : list of sorttable elements) is
  pivot <- arr[0];
  if length(arr) <= 1 then
    return arr

  left <- [];
  right <- [];

  for i <- 1 to length(arr) do
    if arr[i] < pivot then
      left <- push(arr[i])
    end if
    else if arr[i] > pivot then
      right <- push(arr[i])
    end else
  end for loop

  return quicksort(left) <- concat(pivot, quicksort(right))
end procedure
```

## Merge Sort

Merge sort is also an efficient sorting algorithm, which works by divifing the array to be sorted into sublists, each of one element, since an array of one element is considred sorted, then recursively merge the sublists in a sorted order until only one sublist remains.

#### Best Case
 O(n log n) typical, O(n) natural variant

#### Average Case
O(n log n)

#### Worst Case
O(n log n)

#### Pseudocode Implementation

```
procedure merge(left, right, arr) is
  nL <- length(left);
  nR <- length(right);
  i <- 0;
  j <- 0;
  k <- 0;

  while i < nL && j < nR do
    if left[i] <= right[j] then
      arr[k] = left[i];
      i <- i + 1;
    end if
    else then
      arr[k] = right[j];
      j <- j + 1;
    end else
    k <- k + 1;
  end while

  while i < nL do
    arr[k] = left[i]
    i <- i + 1;
    k <- k + 1;
  end while

  while j < nR do
    arr[k] = right[j]
    j <- j + 1;
    k <- k + 1;
  end while

  return arr;
end procedure

procedure merge_sort(arr: list of sortable elements) is
  n <- length(arr);

  if n < 2 then
    return;
  end if

  mid <- (n/2: middle value of arr)
  left <- [];
  right <- [];

  for i <- 0 to mid do
    left[i] = arr[i];
  end for loop

  for j <- mid to n do
    right[j-mid] = arr[j];
  end for loop

  call merge_sort(left);
  call merge_sort(right);
  return merge(left, right, arr);

end procedure
```

## Insertion Sort

Insertion Sort is not the most efficient sorting algorithm, but it is more effective than Bubble Sort and Selection Sort. In insertion sort, there is no partition, but you do separate the array to be sorted into to two subsets, the unsorted and the sorted part. You first start off with a whole unsorted array and you make an imaginary boundary containing the first element at the beginning of that array, then one by one you select an element of the unsorted part and shift all the elements of the sorted part greater than that element so that you can insert your element in the correct sorted position. You keep doing this until the unsorted part contain no elements.

#### Best Case
O(n) comparisons, O(1) swaps

#### Average Case
O(n^2) comparisons, swaps

#### Worst Case
O(n^2) comparisons, swaps

#### Pseudocode Implementation

```
procedure insertion_sort(arr: list of sortable elements) is
  n <- length(arr);

  for i <- 1 to n do
    value <- arr[i];
    hole <- i;

    while hole > 0 && arr[hole-1] > value do
      arr[hole] = arr[hole-1];
      hole <- hole - 1;
    end while loop

    arr[hole] = value;
  end for loop

  return arr;
end procedure;
````



## Selection Sort

Selection Sort is one of the simplest sorting algorithms there is. This algorithm works by selecting the minimun value in the data to be sorted and placing it at the beginning, of that data structure, or on a new one, repeating the process until achieving having a completely sorted data set.

#### Best Case
O(n^2)

#### Average Case
O(n^2)

#### Worst Case
O(n^2)

#### Pseudocode Implementation

```
procedure selection_sort(arr: list of sortable elements) is
  n <- length(arr);

  for i <- 0 to n do
    min <- i;

    for j <- i+1 to n do
      if arr[j] < arr[min] then
        min <- j
      end if
    end j for loop

    if min !<- i then
      tmp <- arr[i]
      arr[i] <- arr[min];
      arr[min] <- tmp;
    end if
  end i for loop

  retun arr;
end procedure;
```