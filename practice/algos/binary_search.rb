sorted_array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

def binary_search(arr, target)
	low = 0
	high = arr.length
	while low <= high
		middle = (low + high) / 2
		return middle if arr[middle] == target
		target < middle ? high = middle - 1 : low = middle + 1
	end
end

puts binary_search(sorted_array, 3)
puts binary_search(sorted_array, 9)
