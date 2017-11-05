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

 # scrunched version: 
def quicksort2 array
	return array if array.length < 2
	pivot = array.pop; left = [];	right = []
	array.each {|num| num <= pivot ? left << num : right << num}
	quicksort2(left) + [pivot] + quicksort2(right)
end


puts quicksort2 [1,5,2,4,6,8,3,5,73,6,8,3,1,5,7,]
