# Each object in Ruby has its own anonymous class, that can have methods, but is only attached the object itself. When we add a emthod to a specific object, Ruby inserts a new singleton class into the inheritance hierarchy as a container to hold these types of methods. The singleton class is a regular class which is hidden. It has no name and is not accessible through a constant like other classes. You can't instantiate a new object from it.

# Each of these define a singleton / anonymous class.
class Rubyist
	def self.who
		"Cool bro"
	end	
end
puts Rubyist.who

###
class Rubyist
	class << self
		def who
			"Cool bro"
		end
	end
end
puts Rubyist.who

###
class Rubyist
end

def Rubyist.who
	"Cool bro"
end
puts Rubyist.who

###
class Rubyist
end

Rubyist.instance_eval do
	def who
		"Cool bro"
	end
end
puts Rubyist.who

###
class << Rubyist
	def who
		"Cool bro"
	end
end
puts Rubyist.who
