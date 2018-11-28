# _#sleep _#ruby _#wait _#suspend
# suspends current thread for (x) seconds, returns the number of seconds
# (rounded) 

# TODO - why is it behaving like this?
def sleep_example(seconds)
	puts "From now"
	p sleep(seconds)
	puts "to now"
end

puts "hmm"
sleep(3)
puts "ok..."
