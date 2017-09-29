#Write a Deaf Grandma program. Whatever you say to grandma (whatever you type in), she should respond with HUH?! SPEAK UP, SONNY!, unless you shout it (type in all capitals). If you shout, she can hear you and yells back, NO, NOT SINCE 1938! To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950. You can't stop talking to grandma until you shout BYE.

puts "say something"
words = gets.chomp
until words == "BYE"
	loud = words.upcase
	if words == loud
		puts "NO, NOT SINCE 19" + (rand(30..50)).to_s + " !"
	else 
		puts "huh?"
	end
	words = gets.chomp
end
