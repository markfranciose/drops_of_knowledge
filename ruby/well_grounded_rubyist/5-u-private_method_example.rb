class Cake
	def initialize(batter)
		@batter = batter
		@baked = true
	end
end

class Egg
end

class Flour
end

class Baker
	def bake_cake
		@batter = []
		pour_flour
		add_egg
		stir_batter
		Cake.new(@batter)
	end

	def pour_flour
		@batter << Flour.new
	end

	def add_egg
		@batter << Egg.new
	end

	def stir_batter
	end
	
	private :pour_flour, :add_egg, :stir_batter 

	# private methods must be defined like this, 
	# if you mix and match the ways.
	# best to just use one way to define the methods
	
	private 
	def clean_up
		puts "scrub scrub"
	end
end

roy = Baker.new

#e roy.stir_batter
# Throws a no method error

#e roy.clean_up
