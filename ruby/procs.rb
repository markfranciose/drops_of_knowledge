p = Proc.new { puts "Hello World"}

p.call
puts p.class

a = p 

puts p

def multiple_procs(proc1, proc2)
	proc1.call
	proc2.call
end

a = Proc.new { puts "First proc" }
b = Proc.new { puts "Second proc" }

multiple_procs(a,b)

proc = Proc.new {puts "What's up dirty dogs?"}
lam = lambda { puts "What IS up dirty dogs??" }

puts "The proc is #{proc}"
puts "The lambda is #{lam}"

# differences between procs and lambdas

# lambdas check the number of arguments, procs do not

cool_lambda = -> message { puts message }
cool_lambda.call(1)
# cool_lambda.call(1,2)
# cool_lambda.call # throw an ArgumentError if you use the wrong # of args

cool_proc = Proc.new {|x| puts x }
cool_proc.call("Something")
cool_proc.call
cool_proc.call("one two", "thgree foure", [1,2,3,4])

def counter 
	n = 0
	return Proc.new {n += 1}
end

a = counter
puts a.call
puts a.call

b = counter
puts b.call

puts a.call

def counter_non_closure
	n = 0
	n += 1
end

counter_non_closure
puts counter_non_closure
puts counter_non_closure

outside_var = 10

# def increment_outside_var
#	  outside_var += 10
# end

# code above will throw a no method error (no + for nil)

increment_var = Proc.new {outside_var += 10}
increment_var.call
increment_var.call
puts outside_var

# a proc is an object, a block is not. 

cube_and_add_2 = Proc.new {|arg| puts arg ** 3 + 2}

array_to_change = [1,2,3,4,5]
puts array_to_change.each(&cube_and_add_2)

times_two = Proc.new {|arg| arg *= 2}
used_proc = array_to_change.map(&times_two)

puts used_proc

def will_this_work?
	true
end

def check_working a
	a
end

puts check_working(will_this_work?)


