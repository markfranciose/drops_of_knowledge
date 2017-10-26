


# my solution

def sequence_sum(begin_number, end_number, step)
	return 0 if begin_number > end_number
	range = (begin_number..end_number).to_a
	range = range.select {|num| range.index(num) % step == 0}
	range.reduce(&:+)
end

# other ways of creating an array with a range

array = *(1..10)
array = Array (1..10)

# However, range objects have a method called 'step', which iterates over them 
# on a certain number of idexes. 

# top answer:

def sequence_sum(b, e, s)
	(b..e).step(s).reduce(&:+)
end
