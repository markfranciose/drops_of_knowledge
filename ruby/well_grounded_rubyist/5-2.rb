# Nested Scope

class Dogs
	puts self
	module Walkable
		puts self
		class Distracted_Aminal
			puts self
		end
	end
	puts self
end

# self is the nested class/module object itself in each of these defs
# eg, on 8 self is Dogs::Walkable::Distracted_Aminal

