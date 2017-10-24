s = n.to_s(2)
a = s.split("")
a.map! do |a|
	if a == "1"
		a = "0"
	else a = "1"
	end
end

puts a


