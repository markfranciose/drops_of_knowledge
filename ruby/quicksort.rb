def quicksort(array)
	pivot = array.pop
	puts pivot
	left = []
	right = []
	return array if array.length < 2
	array.each do |x|
		x <= pivot ? left << x : right << x
	end
	quicksort(left) + [pivot] + quicksort(right)
end

puts quicksort([9,2,4,2,182,23992,1282,4,2,4,6,3,1,2])
