# Always round a number up?
#
# .ceil of a float will give you the next int up for anything greater than int

puts ".ceil of 2.0000000000001"
puts 2.0000000000000000000001.ceil

# be careful when you chain the method though.

puts "remember order of operations:"
puts "2/5.to_f.ceil"
print "evaluates to: "
puts 2/5.to_f.ceil

puts
puts "what we probably want its:"
puts "(2/5.to_f).ceil"
print "which evaluates to: "
puts (2/5.to_f).ceil
