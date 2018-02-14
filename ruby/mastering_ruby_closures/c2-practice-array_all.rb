puts %w[dog cat Mark].all? { |word| word.length >= 3 }
puts %w[dog cat Mark].all? { |word| word.length >= 4 }

class Array
	def all?
		puts "or nothing"
	end
end


%w[dog cat Mark].all? { |word| word.length >= 3 }
%w[dog cat Mark].all? { |word| word.length >= 4 }

class Array
	def all?
		c = 0
		while c < self.length
			return false unless yield(self[c])
			c += 1
		end
		true
	end
end

puts %w[dog cat Mark].all? { |word| word.length >= 3 }
puts %w[dog cat Mark].all? { |word| word.length >= 4 }
