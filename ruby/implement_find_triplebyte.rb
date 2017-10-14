def fii(element, array)
	array.each_with_index do |el, i|
		return i if el == element
	end
	-1
end

puts fii(1, [1,2])
