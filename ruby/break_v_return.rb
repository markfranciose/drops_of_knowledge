# Using return exits from the entire method.
#
# Using break exits only from that loop.

def break_v_return(stop_number, r_v_b)
	(1..10).each do |number1|
		(1..10).each do |number2|
			puts product = number1 * number2
			if product >= stop_number
				return if r_v_b == "return"
				break if r_v_b == "break"
			end
		end
	end
end

puts "return:"
break_v_return(5, "return")
puts "break:"
break_v_return(5, "break")

# example that might be easier to understand.

def break_v_return_2(r_v_b)
	counter = 0
	until counter == 10
		puts counter +=1
		return if counter == 5 && r_v_b == "return"
		break if counter == 5 && r_v_b == "break"
	end

	puts "If you see me, a break(or nothing) must have been used"
end

puts "This is return:"
break_v_return_2("return")

puts "This is break:"
break_v_return_2("break")

