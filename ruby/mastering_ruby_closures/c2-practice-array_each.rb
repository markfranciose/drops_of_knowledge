class Array
	def each
		puts "no dice"
	end
end

[1,2,3,4].each { |a| puts a }

class Array
	def each
		c = 0
		while c < self.length
			yield(self[c])
			c += 1
		end
		self
	end
end

[1,2,3,4].each { |a| puts a }

