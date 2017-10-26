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

huh = []
bigholder.each { |a|
if a[0..2] == "ATG" && 
a.length % 3 == 0
end 
huh << a}

print huh
