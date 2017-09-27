def maskify(cc)
  cc.gsub(/.(?=....)/, '#')
end

# 1-3 this is the solution I was reaching for.

def maskify(cc)
	return cc if cc.length < 5
	masks		= "#" * (cc.length - 4)
	last_4	= cc.split('').last(4).join
	masks + last_4
end

# if you're not so into regex...
