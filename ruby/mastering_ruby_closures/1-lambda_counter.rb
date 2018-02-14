Counter = lambda do
	x = 0
	get_x = lambda { x }
	increment = lambda { x += 1}
	decrement = lambda { x -= 1}

	{get_x: get_x, increment: increment, decrement: decrement}
end


# usage
# init a counter
# cool = Counter.call

# invoke an inner lambda
# cool[:get_x].call 
