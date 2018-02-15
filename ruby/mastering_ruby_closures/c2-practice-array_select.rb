print [1,2,3,4,5,6].select(&:even?)
puts

class Array
	def select
		"select this!"
	end
end

print [1,2,3,4,5,6].select(&:even?)
puts

class Array
	def select
		counter = 0
		selected = []
		while counter < self.length
			selected << self[counter] if yield(self[counter])
			counter += 1
		end
		selected
	end
end

print [1,2,3,4,5,6].select(&:even?)
