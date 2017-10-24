# def moves(a)
# 	e = a.select {|b| b.even?}.count
# 	puts e
# 	b = a[0..(e-1)]
# 	print b
# 	c = b.select {|s| s.odd?}.count
# 	c
# end
paa = [8,5,11,4,6] 
a = [8,5,11,4,6].select {|b| b.even?}.count
b = paa[0, a]

x = b.select {|d| d.odd?}.count
puts x