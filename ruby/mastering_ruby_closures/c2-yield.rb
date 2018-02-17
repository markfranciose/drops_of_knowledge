# when you see 'yield' think "execute the block"

def do_thing
	yield
end

do_thing { puts "A thing is being done" }

do_thing do 
	puts "hi"
end

print do_thing { [1,2,3] << 4 }
puts

# LocalJumpError no block given (yield)
#e do_thing

def do_another(x, y)
	yield(x, y)
end

puts do_another(5, 1) { |x, y| x + y }

# explanation for error below: SO 18623447
#e puts do_another("Hi good looking ", "What you got cookin?") do |f, s| "#{f}, #{s}" end
puts do_another("Hi good looking ", "What you got cookin?") { |f, s| "#{f}, #{s}" }
