def fibo(int)
	return 1 if int < 2 
	fibo(int - 1) + fibo(int - 2)
end

p fibo(3)
p fibo(4)
p fibo(5)

def factorial(int)
	return 1 if int < 2
	int * factorial(int - 1)
end

p factorial(3)
p factorial(4)
p factorial(5)
