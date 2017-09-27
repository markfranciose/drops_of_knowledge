def quicksort(array)
	if array.length < 2
		array
	else 		
		pivot = array[-1] # this is not the optimal place for the pivot
		left = []
		right = []
		array.delete(pivot)
		array.each do |index|
			if index <= pivot
				left << index
			else
				right << index	
			end		
		end
	quicksort(left) + [pivot] + quicksort(right)
	end
end

test_array = [10, 12, 2, 43, 2, 1, 9.2, 6, 100]

p quicksort(test_array)

