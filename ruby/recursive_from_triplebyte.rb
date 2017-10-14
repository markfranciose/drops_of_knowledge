def f(n)
	if n <= 0
		return 0
	end
	n + f((n/2))
end

puts f(4)
