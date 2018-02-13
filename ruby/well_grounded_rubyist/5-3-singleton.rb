class Dog
end

fido = Dog.new

def fido.bark 
	puts "woof woof, self is #{self}"
end

fido.bark
