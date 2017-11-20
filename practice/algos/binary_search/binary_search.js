let arr = [0,1,2,3,4,5,6];

const binarySearch = (arr, target) => {
	let low = 0;
	let high = arr.length;
	while (low <= high) {
		let middle = Math.floor((low + high) / 2)
		if (arr[middle] === target) return target;
		middle > target ? high = middle - 1 : low = middle + 1
	}
}

console.log(binarySearch(arr, 4));
