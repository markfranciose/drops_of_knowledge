 def binary_search array, target
	 lower = 0
	 upper = array.length

	 while lower <= upper
		 middle = (lower + upper) / 2
		 value = array[middle]
		 return middle if value == target
		 value < target ? lower = middle + 1 : upper = middle - 1
	 end

	 "Something has gone horribly wrong"
 end

 simple_array = [1,2,3,4,5,6,7]
puts  binary_search(simple_array, 4)

edge_small = [1,2,3,4,5,6,7]
puts binary_search(edge_small, 1)

edge_large = [1,2,3,4,5,6,7]
puts binary_search(edge_large, 7)

def binary_search_2(array, target)
	lower = 0
	upper = array.length

	while lower <= upper
		middle = ((upper + lower) / 2)
		value = array[middle]
		return middle if value == target
		value < target ? lower = middle + 1 : upper = middle - 1
	end
end

array = [1,2,3,4,5,6,7,8]
puts binary_search_2(array, 4)
puts binary_search_2(array, 1)
puts binary_search_2(array, 8)
