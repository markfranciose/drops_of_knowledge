# Metaprogramming in Ruby is writing code that manipulates language constructs
# like classes, modules, instance vars at runtime and executes the new code
# without restarting the program

# An object's instance variables live on the object itself and the instance
# methods live on the class. 

# Classes themsleves are objects. 
# Since a class is an object, everything that applies to objects applies to
# classes. Classes have their own class, the Class class.

# Classes are never closed. You can reopen existing classes, even those
# from the standard library and replace them on the fly:

class String
	def yell_size
		self.size.to_s + "!!"
	end
end

puts "lemme say this all".yell_size


