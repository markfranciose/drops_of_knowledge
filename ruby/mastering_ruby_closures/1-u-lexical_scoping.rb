# defn - lexical scoping: the value of x is given by the innermost
# statement that declares x. The area where a variable maintains a
# value is the scope of that variable.
# (This defn isn't perfect, but does have some intuative value

msg = "drive the principal's car"

3.times do 
	prefix = "I will not"
	puts "#{prefix} #{msg}" # msg is available to the block 
end

#e puts prefix # the variable is not visible outside the block

# Identify Free Variables

chalkboard_gag = lambda do |msg|
	lambda do
		prefix = "I will not"
		"#{prefix} #{msg}"
	end
end

puts chalkboard_gag.call("drive the principal's car") # this returns a lambda

# To print the message invoke the inner lambda
inner_lambda = chalkboard_gag.call("ride the washing machine")
puts inner_lambda.call()

# When that inner lambda refers to a variable that is not declared in it, 
# that is a free variable, in this case, "msg"



