q1. What is the definition of a closure? 
1. A closure is a function with access to a variable defined in its' parent's scope. The closure 'encloses' the variable, such that this variable is available to the function, whereas otherwise the variable would have been garbage collected.

q2. Identify the free variable in the following:
```ruby
def is_larger_than(amount)
	lambda do |a|
		a > amount
	end
end
```
2. The free variable is 'amount'.

q3. You work in a music






