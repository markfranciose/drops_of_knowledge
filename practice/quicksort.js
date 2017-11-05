const quickSort = (array) => {
	// if the array contains one or zero elements, it is already sorted
  if (array.length < 2) {
		return array;
	} else {
		// remove last element from array, define as variable 'pivot'
	  let pivot = array.pop();
		let left = [];
		let right = []; // declare two empty arrays

		// sort each member of array into either left (less than or equal to)
		// or right (greater than)
		// the greater than can be on either side.
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] <= pivot) {
			  left.push(array[i])
			} else {
				right.push(array[i])
			}
		}
		// call quicksort on each array, concat w/ pivot in the middle
		return quickSort(left).concat([pivot], quickSort(right))
		};
}

console.log(quickSort([12,3,4,2,7]))
