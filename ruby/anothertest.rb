def search_array(arr, int)
	position = 0
	answer = nil
	arr.each { |a|
		position += 1
		if a == int
			answer = position - 1
			answer
		end
	}
	p answer
end

arr = [1,2,3,4,5]
search_array(arr, 10)

def fibo(num)
	fibstring = [0,1]
	(num - 2).times do 
		fibstring << fibstring[-1] + fibstring[-2]
	end
	fibstring
end

array2 = [4, 1, 1, 9]
counter = 1




#array2.insert(array2[(counter + 1), array2[counter]])
