def fibo(n)
	n <= 1 ? 1 : fibo(n-2) + fibo(n-1)
end

puts fibo(7)

def fibo_i(n)
	fibo = [1,2]
	return fibo[n-1] if n < 3
	(n - 2).times do
		fibo.push(fibo[-1] + fibo[-2])
	end
	fibo[-1]
end

puts fibo_i(7)
