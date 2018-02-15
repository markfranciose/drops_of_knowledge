class Array
	def map
		"no more maps"
	end

	def map!
		"nothing shall be banged"
	end
end

print ["a", "b", "c", "d"].map(&:upcase)
puts
print ["a", "b", "c", "d"].map!(&:upcase)
puts

class Array
	def map
		c = 0
		new = []
		while c < self.length
			new << yield(self[c])
			c += 1
		end
		new
	end

	def map!
		c = 0
		while c < self.length
			self[c] = yield(self[c])
			c += 1
		end
		self
	end
end

print ["a", "b", "c", "d"].map(&:upcase)
puts

array = ["a", "b", "c", "d"]
array.map!(&:upcase)

print array
