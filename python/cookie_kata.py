def cookie(x):
	if isinstance(x, str):
		cookie_eater = "Zach"
	elif isinstance(x, int) or isinstance(x, float):
		cookie_eater = "Monica"
	else:
		cookie_eater = "the dog"
	if x == True or x == False:
		cookie_eater = "the dog"
	return "Who ate the last cookie? It was %s!" % cookie_eater

print(cookie("Ryan"))
print(cookie(2.3))
print(cookie(True))

print(isinstance(True, float))
