# Sorts

## Bubble Sort 
Bubble sort works by comparing two adjacent numbers next to each other and then swapping places if the smaller index's value is larger than the larger index's. Continue looping through until all values are in ascending order.

Javascript implementation:
```
const bubbleSort = nums => {
  do {
		var swapped = false;
		for (var i =0; i < nums.length; i+= 1) {
			if (nums[i] > nums[i+1]) {
				var temp = nums[i];
				nums[i] = nums[i+1];
				nums[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return nums
}
```


## Quick Sort
Quick sort grabs a pivot from a part of the array (easiest to visualize is the last element), then separates the array (without the pivot) into two new arrays, one with values lessthan the pivot the other with values greater than the pivot. One side has to take the equals. Base case = array.length < 2 (this will generate arrays with a length of 0, so its important to include them. Recursively run quicksort on each of the left and right arrays. Concat left, pivot, right. 

Javascript implementation:
```
const quickSort = array => {
 if (array.length < 2) {
	return array; 
 } 
 else {
 	let pivot = array.pop();
	let left = [];
	left right = [];
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] <= pivot) {
			left.push(array[i])
		}
		else {
			right.push(array[i])
		};
	}
 return quickSort(left).concat([pivot], quickSort(right));
 }
}
```
