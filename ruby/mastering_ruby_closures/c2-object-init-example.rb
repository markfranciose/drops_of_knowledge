module Program
	module Feature
		class Object
			attr_accessor :prop_one, :prop_two,
										:prop_three, :prop_four

			def initialize
				yield self if block_given?
			end
		end
	end
end

a = Program::Feature::Object.new do |config|
	config.prop_one = "cool"
	config.prop_two = "sweet"
	config.prop_three = "rad"
	config.prop_four = "nice"
end

puts a.prop_one
