def merge_two_sorted_list(l1, l2)
	rtn = []
	if l1[0] < l2[0]
		rtn += l1
	end
	rtn += l2
	return rtn
end

puts merge_two_sorted_list([1,2,3,4], [2,6,9,10])
