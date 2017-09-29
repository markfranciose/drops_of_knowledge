#! c:/ruby22/bin/ruby -v
def togene(n)
	if n == 0
		n = "A"
	elsif n == 1
		n = "T"
	elsif n == 2
		n = "C"
	else
		n = "G"
	end
end

bigholder = []
50000.times do
holder = []
lengthy = rand(25)
lengthy.times do 
	cool = togene(rand(4))
	cool.to_s
	holder.push(cool)
end
two = holder.join
bigholder << two
end

print bigholder
possib = []
start_count = 0
bigholder.each { |a|
	if a[0..2] == "ATG"
		start_count += 1
		possib << a
	end
	}
puts start_count

puts possib
puts "divider \n\n\n\n"
tri = []
possib.each { |a|
if a.length % 3 == 0
	tri << a
end 
}

puts tri
puts "divder \n\n\n"
more = []
tri.each { |a|
if a[-3..-1] == "TAA" || a[-3..-1] == "TAG" || a[-3..-1] == "TGA"
 more << a
end
}

puts more
puts "\n\n\n\n"

last = []
more.each { |a|
	if a[]

		#ranges a[-3..-1]
}
