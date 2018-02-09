class Fixnum
	def times
		puts "taken away!"
	end
end

10.times { puts "hi" }


# extend Fixnum class
class Fixnum
	# override times method
	def times
		# set a counter
		x = 0
		# while the counter is less than our Fixnum (2,3,129)
		while x < self
			# increment the counter
			x += 1
			# yield the block passed to the method
			yield
		end
		# return the Fixnum instance
		self
	end
end

10.times { puts "hi" }
