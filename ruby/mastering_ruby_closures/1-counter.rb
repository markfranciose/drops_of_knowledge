# class-based method of a simple counter
 
class CounterClass
	def intitialize
		@x = 0
	end

	def get_x
		@x
	end

	def increment
		@x += 1 
	end

	def decrement
		@x -= 1
	end
end

# lambda-based method of a simple counter
CounterLambda = lambda do
	x = 0

	get_x	  = lambda { x }
	increment = lambda { x += 1 }
	decrement = lambda { x -= 1 }

	{
		get_x:	   get_x,
		increment: increment,
		decrement: decrement
	}
end



