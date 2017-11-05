def merge_sort array
	return array if array.length < 2

	middle = array.length / 2
	left = array[0...middle]
	right = array[middle..-1]

	stitch(merge_sort(left), merge_sort(right))
end

def stitch left, right
	results = []

	while left.length > 0 && right.length > 0
		if left[0] <= right[0]
			results << left.shift
		else
			results << right.shift
		end
	end

	results + left + right
end

array_to_sort = [3,1,3,6,8,5,3,4,8,9,8,6,3,46,7,2]

puts merge_sort(array_to_sort)
