

def error(a)
	cool = a / 100
 rescue => e 
	puts "not a number"

 ensure
	puts "This will get printed" 
end

error("error")

puts "without the error rescue, you wouldn't get to see this" 
