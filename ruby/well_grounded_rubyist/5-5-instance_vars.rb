# instance variables always belong to self
# at the point in the program they're evaluated
class Dog
	def maul
		@teeth = "super sharp!!"
		puts @teeth 
	end

	@teeth = "nice, easy teeth"
end

Dog.new.maul

class Doberman 
	puts self

	@v = "top level instance var"
	puts @v

	def var_example
		puts self
		puts @v 
	end
end

bitey = Doberman.new
bitey.var_example
