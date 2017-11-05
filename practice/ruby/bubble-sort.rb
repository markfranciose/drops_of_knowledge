def bubble_sort(array)
  n = array.length
	loop do
		swapped = false # declare swapped as false
		(n-1).times do |i| # don't check the last item in the array.
		  if array[i] > array[i + 1]
				array[i], array[i+1] = array[i + 1], array[i] # if the first num is more than the second, swap
				swapped = true # set swapped var to true
			end
		end
		break if !swapped # if there have been no swaps, the array is sorted, else. loop will go 
	end
	array
end

puts bubble_sort([4,2,7,9,2,0,2,18])
