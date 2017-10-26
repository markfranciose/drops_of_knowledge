# Given an array, find the int that appears an odd number of times
# There will always be only one int that appears an odd number of times

arr_1 = [1,2,2,3,3,4,4,5,5]
arr_2 = [2,2,3,3,111,111,234,234,234,90,90]

def find_int(seq)
	seq.find {|n| seq.count(n).odd?}
end

puts find_int(arr_1) == 1
puts find_int(arr_2) == 234
