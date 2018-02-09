class Array
	def each
		puts "haha! no .each"
	end
end

%w(This builds an array of strings).each do |x|

	puts x
end

class Array
	def each
		x = 0
		while x < self.length
			yield self[x]
			x += 1
		end
	end
end


%w(This builds an array of strings).each do |x|
	puts x
end
