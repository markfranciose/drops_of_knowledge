def quicksort(array)
	if array.length < 2
		array
	else 		
		pivot = array[-1]
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

