def bubble_sort(array)
  swapped = true 
  until !swapped
    swapped = false
    index = 0
    array.length-1.times do
      if array[index] > array[index + 1]
        array[index], array[index + 1] = array[index + 1], array[index]
	swapped = true
      end
      index += 1
      puts array
    end
  end
  array
end

unsorted_array = [5,7,4,6]

puts bubble_sort(unsorted_array)

