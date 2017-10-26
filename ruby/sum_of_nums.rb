# Given two ints a & b, which can be positive or negative. find the sum of all 
# the numbers between them including them too. If the two numbers are equal 
# return a or b.
#
# Note: a and b are not necesarilly ordered

# my soultion:

def get_sum(a,b)
	range = b..a
	range = a..b if b > a
	range.inject(&:+)
end

# First, I was turning the ranges into arrays. After looking at IRB, it turns
# out that you can call inject (and probably other enum methods) on ranges.

# the highest ranked:

def get_sum(a,b)
	return a < b ? (a..b).reduce(:+) : (b..a).reduce(:+)
end

# Attempting (10..2).reduce(:+) will return nil. So, you can use the ternary
# and get this on one line. I'm not big on forcing one liners.


