# self is the default reciever of methods, so if you are calling 
# a method on 'self' you don't need to specify reciever

class Dog
	def Dog.bark
		puts "woof woof"
	end

	puts "inside the class"
	bark 
	puts "this works"
end

puts "but outside"
#e bark
puts "it doesn't"
# this will throw a NoMethod error, since main is self at this time and
# main has no method :bark

puts "with an explicit reciever"
Dog.bark
puts "it works"

puts "-------------------" 

# calling one instance method from another

class Dog
	def bark
		puts "woof woof woof" 
		puts self
	end

	def defend_house
		puts "*this dogs jumps at you*"
		bark 
		puts self
		# in the call to bark, the reciever is self 
		# so the call is just 'bark' 
	end
end

kujo = Dog.new
kujo.defend_house 


















