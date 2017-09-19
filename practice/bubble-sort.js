// bubble sort is a good building block for learning. Not something you'd actually use in production.

let unsortedArray = [5,7,6,4]

// if something is swapped
// 5,6,7,4
// 5,6,4,7
// 5,4,6,7
// outer loop that runs at least once, do/while loop. 
// inner loop is x, x+1 in order, if no swap. 

// bubble sort works by compariing two adjacent numbers next to each other and then swapping their places if the smaller index's value is larger than the larger indexes'. Continues through the loop until all values are in orde

const bubbleSort = (nums) => {
	do {
		var swapped = false;
		for (let i = 0; i < nums.length; i += 1) {
			if (nums[i] > nums[i+1]) {
				const temp = nums[i];
				nums[i] = nums[i+1];
				nums[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return nums
}

console.log(bubbleSort(unsortedArray))
