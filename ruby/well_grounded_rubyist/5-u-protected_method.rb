# you can call a protected method on an object x if:
# - the default object (self) is an instance of the same class as x
# - or an ancestor or decsendant class

class Dog
	def initialize(pounds)
		@pounds = pounds
	end

	def pounds 
		@pounds
	end

	def compare(dog)
		if dog.pounds > pounds # the works because self is the object which is calling compare, however, for readability it might be best to explicitly specify the self in this. 
			puts "the other dog is taller" 
		else
			puts "this dog is bigger"
		end
	end

	protected :pounds 
end

dog1 = Dog.new(100)
dog2 = Dog.new(101)

dog1.compare(dog2)
