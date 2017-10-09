require 'set'

def all_example(array)
	puts array.all?
end

array_1 = [false, true]

print array_1
puts
puts "using .all? returns"
puts all_example(array_1)


array_2 = [true, true, true]
print array_2
puts
puts "using .all? returns"
puts all_example(array_2)

puts
puts "If everything in the enumerable evaluates to truthy, all? will return true"

array_3 = [true, 1, 2, 3, "cool", Set.new]
puts all_example(array_3)

array_4 = [nil, true, true, true, true]
puts all_example(array_4)
