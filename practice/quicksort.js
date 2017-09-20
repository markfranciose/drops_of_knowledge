const quickSort = (array) => {
  if (array.length < 2) {
		return array;
		} else {
	  let pivot = array.pop();	
		let left = [];
		let right = [];
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] <= pivot) {
			  left.push(array[i])
			} else {
				right.push(array[i])
			}
		}
		return quickSort(left).concat([pivot], quickSort(right))
		};
}

console.log(quickSort([12,3,4,2,7]))
