word = "test"
arr = word.split("")

hashy = {}


arr.each { |d| hashy[d] = "_ " }

arr.each {|v| print " " + hashy[v]}

thehash = recordkeeper
array = displayarray
counter = 0
until counter == 5
	counter += 1
	guess = gets.chomp
		if hashy.has_key?(guess)
		hashy[guess] = guess
		end
	arr.each {|v| print " " + hashy[v]}
end

