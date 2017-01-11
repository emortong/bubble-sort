
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

## Quick Sort

Quick Sort is a divide and conquer algorithm, it mostly acts as the most time efficient sorting algorithm. Quick sort first declares a pivot value and compares all the elements of the array against that value, if the element is less than the pivot, it will be placed in a newly created low sub-array, if it is greater in a high sub-array. It does this until the array reaches a  length of 0 or 1, and then it recusrively joins the low and high sub-arrays back again.

#### Best Case
 O(n log n) (simple partition) or O(n) (three-way partition and equal keys)

#### Average Case
O(n log n)

#### Worst Case
O(n^2)

#### Pseudocode Implementation

## Merge Sort

Merge sort is also an efficient sorting algorithm, which works by divifing the array to be sorted into sublists, each of one element, since an array of one element is considred sorted, then recursively merge the sublists in a sorted order until only one sublist remains.

#### Best Case
 O(n log n) typical, O(n) natural variant

#### Average Case
O(n log n)

#### Worst Case
O(n log n)

#### Pseudocode Implementation