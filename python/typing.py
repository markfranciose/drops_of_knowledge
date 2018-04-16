# string to number float int integer
string = "333.11231"
float(string)
int(float(string))

# check type
# instance of str or any subclass of str
vaar = "I'm a string"
if isinstance(vaar, str):
		print("Truly a string")

# check if the type of vaar is exactly str:
if type(vaar) is str:
   print("Only a String")

# dict keys to list
some_dict = {"dog": "woof", "cat": "meow"}
key_list = list(some_dict.keys())
print(key_list)


