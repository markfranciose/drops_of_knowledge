# short-hand
p = proc { |x,y| x + y }
puts p

# long short-hand
p = Kernel.proc { |x,y| x + y }
puts p

# the usual
p = Proc.new { |x,y| x + y }
puts p

# Using Procs with Proc#call(args)():
first_call = p.call("concat ", "words")
puts first_call

second_call = p.call(2, 40)
puts second_call

# Call shorthand (discouraged because not everyone will know the syntax)
short_call = p.("this works ", "too")
puts short_call
short_add = p.(2, 400)
puts short_add

# yet weirder...

puts p === ["= = ", "="]

# Procs in case statements
even = proc {|x| x % 2 == 0}

case 11
	when even
		puts	"number is even"
	else
		puts	"number is odd"
end


