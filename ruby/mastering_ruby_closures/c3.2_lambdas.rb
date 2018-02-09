# a lambda is a Proc

puts lambda {}.class

# If you need to distinguish... Proc#lambda?()
thing_1 = lambda {}
thing_2 = proc {}

puts thing_1.lambda?
puts thing_2.lambda?

# similar use of the call methods to Procs

puts lambda {|a| a ** 3}.call(10)

lambda_in_var = lambda {|a,b| a + b + 10}
puts lambda_in_var.call(-10, -10)

puts lambda_in_var.(10,10)

puts lambda_in_var[20,20]

# the syntax below doesn't work.
# lambda { |x,y| x + y } === [100,100]

# stabby lambda syntax
-> (x,y,z) {x * x + y * y + z * z}

puts -> (x) {x + 1}.call(10)
puts -> (c) {c + 10}[10]



