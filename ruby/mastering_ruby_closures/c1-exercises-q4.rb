def complement(predicate)
	lambda do |value|
		not predicate.call(value)
	end
end

p return_lambda =  complement(lambda { |a| a })
p return_lambda.call(false)
p return_lambda.call(true)
p return_lambda.call(1)

complement = lambda do |function|
	return lambda do |value|
		not	function.call(value)
	end
end

is_even = lambda { |num| num % 2 == 0 }

p complement.call(is_even).call(4)

p complement.call(is_even).call(5)
