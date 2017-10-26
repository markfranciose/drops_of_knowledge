array = [["a", "b", "c"], ["d", "e", "f", "g"]]

array.each do |word|
	word.map! do |char|
		if word.index(char).even?
			char.upcase
		else
			char.downcase
		end
	end
end

puts array
