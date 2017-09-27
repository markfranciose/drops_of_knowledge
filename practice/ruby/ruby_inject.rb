# Case one: summing items in an array
inject_one = [1,2,3,4].inject(0) { |result, element| result + element }
puts inject_one

inject_two = [1,2,3,4].inject { |result, element| result + element }
puts inject_two

inject_three = [1,2,3,4].inject(5) do |result, element|
	result + element
end

puts inject_three

inject_four = [1,2,3,4].inject { |cool, sweet| cool + sweet }
puts inject_four

inject_five = [1,1,1,3,1].inject(3) do |result, element|
	result * element
end

puts inject_five

# Case two: Building a hash
inject_hash_array = [
	["first_name", "Mark"],
	["last_name", "Franciose"],
	["age", "33"],
	["height", "tall"],
	["weight", "ain't what it used to be..."]
]

# the easiest way to accomplish thie would be: 
# inject_hash_array.to_h

injected_hash = inject_hash_array.inject({}) do |result, element|
	result[element[0]] = element[1]
	result
end
puts injected_hash

case_hyjinx = inject_hash_array.inject({}) do |result, element|
	result[element[0].upcase] = element.last.downcase
	result
end

puts case_hyjinx

# Case three: Building an Array

numbers = [1,2,3,4,5,6,7,8,9,10]
print numbers 

numbers2 = (1..10).to_a
print numbers2

numbers_2_1 = numbers2.inject([]) do |result, element|
	result << element.to_s if element % 2 == 0
	result
end

puts

print numbers_2_1


