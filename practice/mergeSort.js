const mergeSort = array => {
	if (array.length < 2) {
		return array;
	}

	let middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle, array.length);

	return stitch(mergeSort(left), mergeSort(right));
}

const stitch = (left, right) => {
	const results = []
	while (left.length && right.length) { // loop will continue until both lengths are 0
		if (left[0] <= right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}

	}

	while (left.length) {
		results.push(left.shift());
	}
	while (right.length){
		results.push(right.shift());
	}

	return results;
};


let a = mergeSort([2,3,6,4,7,2,4,8,4,3,8,9,4,2,4,2])
console.log(a);
