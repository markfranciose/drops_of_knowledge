# basics of yield


# Using the &parameter
def hello
	# nothing is here, yo.				
end

hello do
	puts "hello!"
end

# executing the method on line 5 won't throw an error, but it won't print out "hello!" to the terminal.
# line 5-7 is the same as:

hello {puts "hello!"}

def hello
	yield if block_given?
end

hello {puts "hello!"}


