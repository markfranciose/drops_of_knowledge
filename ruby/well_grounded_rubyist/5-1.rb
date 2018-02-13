puts "Top Level"
puts "self is #{self} at the top level self is the default default object"
puts "--------"

class Dog
	puts "Inside a class definition, self is #{self}"
	puts "That class Object itself. This makes sense since when writing"
	puts "class methods its common to say self.method"
	puts "--------"

	def self.Doggity
		puts "Self inside a class method"
		puts "is #{self}, again, the class Object itself."
		puts "-----"
	end

	def bark
		puts "inside an instance method"
		puts "self is #{self}"
		puts "the reciever of the method, an instance of the class"
		puts "-------"
	end

end

puts Dog.Doggity 

dog1 = Dog.new
dog1.bark
dog2 = Dog.new
dog2.bark


