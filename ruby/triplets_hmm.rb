def solve(a0, a1, a2, b0, b1, b2)
	alice = 0
	bob = 0
	alice += 1 if a0 > b0
	bob += 1 if b0 > a0
	alice += 1 if a1 > b1
	alice += 1 if a2 > b2
	bob += 1 if b1 > a1
	bob += 1 if b2 > a2
	puts "#{alice} #{bob}"
end

puts solve(1,2,3,4,5,6)
