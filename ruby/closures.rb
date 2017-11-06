# closure in Ruby


def init
	name = "Nike the dog"
	def display_name
		puts name
	end
	display_name
end

# init # will throw a Name Error, the display_name method doesn't have access to the name variable.
