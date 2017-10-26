
puts "What's the Square root of my perfect square?"
puts "Please enter a perfect square"
answer = 0
x = gets.chomp.to_f

if x < 0 
	puts "no negative numbers holmes"
elsif Math.sqrt(x) * Math.sqrt(x) != x
	puts "not a perfect square"
else
	until answer * answer == x
		answer = answer += 1
	end
	puts "#{answer} is your number's square root!"
end

#puts Math.sqrt(11.0)
#puts Math.sqrt(10)



