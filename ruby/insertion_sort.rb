def insertion_sort(array)
	array.each_with_index do |num, index|
		temp = array[index]
		left = index - 1
		while left >= 0 && array[left] > temp
			array[left + 1] = array[left]
			left -= 1
		end
		array[left + 1] = temp
		print array
		puts
	end
end

array = [9,2,5,2,9,0]
puts insertion_sort(array)


