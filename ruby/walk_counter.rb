# You live in a city with a perfect grid. You arrive 10 minutes too early for
# an appointment. You decide to take a walk. The city has an app to generate
# a walking path. It will give you a 'n, s, e, w' to correspond to a direction
# It takes a minute to walk each block. Return true if the walk given will 
# take 10 minutes and return you to your starting place.


# Test Cases

walk_1 = ['n', 'w', 's', 'e'] # => should return false
walk_2 = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'] # => should return false
walk_3 = ['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'] # => should return true   

# My solution

def valid_walk(path)
	return true if path.length == 10 && path.count('n') == path.count('s') && path.count('w') == path.count('e')
	false
end

puts valid_walk(walk_1)
puts valid_walk(walk_2)
puts valid_walk(walk_3)

# this works, but can be improved in two ways

# one - the return true if and false are not needed. The presence of the '&&' 
# logical operator means that the statement will automatically be evaluated
# to truthy or falsy
#

def valid_walk(path)
	path.length == 10 && path.count('n') == path.count('s') && path.count('w') == path.count('e')
end

puts valid_walk(walk_1)
puts valid_walk(walk_2)
puts valid_walk(walk_3)



# two
# the single line is perferred by some. But not by me. Over 80 width? newline!
# the new lines don't mess anything up here... 

def valid_walk(path)
	path.length == 10 &&
	path.count('n') == path.count('s') &&
	path.count('e') == path.count('w')
end

puts valid_walk(walk_1)
puts valid_walk(walk_2)
puts valid_walk(walk_3)

