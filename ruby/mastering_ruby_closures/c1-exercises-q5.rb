a = [1,2,3,4,5].reduce([]) do |acc, x|
	acc << ( x * 2 )
end

print a
