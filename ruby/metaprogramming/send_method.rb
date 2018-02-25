# send() is an instance method of the Object class. The first arugment
# to send() is the message that you're sending to the object: the name
# of a method. Can use a string or symbol, symbols perfered. Any 
# remaining arguments are passed to the method.

class Dog
  def bark(*args)
    " woof woof #{args.join(" ")}!!!"
  end
end

chairman_meow = Dog.new

puts chairman_meow.send(:bark, "woof", "grrr", "egad!")

dog_string = "Gimme bacon"

dog_string.send(:upcase!)

puts dog_string
