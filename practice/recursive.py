def fibo(n):
  if n < 2:
    return 1
  else:
    return fibo(n - 1) + fibo(n - 2)
    

print(fibo(2))
print(fibo(3))
print(fibo(4))

def factorial(n):
  if n < 2:
    return 1
  else:
    return n * factorial(n-1)
    
print(factorial(2))
print(factorial(3))
print(factorial(4))