def counter(array)
  frequency = Hash.new(0)
	array.each {|word| frequency[word] += 1}
	frequency
end

cool = true

ransom = ["one", "two", "three", "three"]
ransom = counter(ransom)
zine = ["one", "two", "three"]
zine = counter(zine)

ransom.each_key do |key|
  if zine.key?(key) != true
	   cool = false
	end
end

ransom.each do |key, value|
  if zine[key] < value
	  cool = false
	end
end

puts cool
