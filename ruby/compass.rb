class Compass
	
	def initialize 
		@directions	= ["north", "east", "south", "west"]
		@bearing			= 0
	end

	def direction
		@directions[@bearing]
	end

	def inform(turn_direction)
		puts "Turning #{turn_direction}. Now bearing #{direction}"
	end

	def turn_right
		@bearing = (@bearing + 1) % @directions.size
		inform("right")
	end

	def turn_left
		@bearing = (@bearing + (@directions.size - 1)) % @directions.size
		inform("left")
	end
end
