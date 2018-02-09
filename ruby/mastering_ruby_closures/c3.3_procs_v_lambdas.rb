# Differences: arity and return semantics

l = lambda {|x,y| puts "#{x} and #{y}"}
p = proc {|x,y| puts "#{x} and #{y}"}

l.call("Jack", "Jill")
p.call("Pork", "Beans")

p.call("Solo") # Proc returns just fine
# l.call("Mio") # But a lambda will throw an ArgumentError if the number
# of args is greater or less


