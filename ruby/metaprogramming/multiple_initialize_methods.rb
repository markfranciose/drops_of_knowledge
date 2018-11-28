# Example of class overloading:
# Create a rectangle class that represents a rectangular shape on a grid.
# Two different ways of instantiating.
# How to do this with Ruby having a single initialize method?

class Rectangle
	def initialize(*args)
		if args.size < 2 || args.size > 3
		# !(2..3).include? args.size 
			puts "This method takes either 2 or three arguments"
		else 
			puts "Correct number of arguments"
		end
	end
end

Rectangle.new( [ 10, 23 ], 4, 10 )
Rectangle.new( [ 10, 23 ], [ 14 , 13 ] )

# there would be a bunch of error checking to do with this code.
# But, the point is that this allows any number of args, and thus different
# ways of instantiating the object.

# the argument on line 7 is the 'splat args'. Allows for variable length
# arg list.
