loud_string = "This string is going to get sliced down!!!!"
quiet_string = loud_string[:-4]

print(quiet_string)

string_one = "Uno"
string_one += " means one in spanish."

print(string_one)


# Join method
# join string . join (sequence to be joined )
string = " "
sequence = ("a", "b", "c", "d")
print(string.join(sequence))

#multi line string multiline
multiline_string = """
THIS IS 
A
MULTILINE
STRING!
"""

print(multiline_string)
