# single line comments start with a '#'
# assign variables with the name and an '=' sign
elmo = 10

my_int = 7
my_float =  1.23
my_bool = True # or 'False', upcased in python?

def spam():
  eggs = 12
  return eggs

  print spam() # in python whitespace indentation identifies a block

  """
  Multi-line comments have three quotation marks.
  """

addition = 100 + 5
subtraction = 100 - 29
multiplication = 103 * 3
division = 100 / 10 # python will do floating point division by default, even with ints
exponentiation = 2 ** 3 # 8, 2 to the third power
modulo = 5 % 4 # 1

"""
Meal Example
"""

meal = 44.50
tax = .0675
tip = .15

meal = meal + (meal * tax)
total = meal * (meal * tip)
print(total)

# escaping chars with '\'
'This isn\'t flying, this is falling with style'

# String chars are accessible via indexes
string = 'Mark Franciose'
print(string[1]) # a

# More common in python is single quote strings

# useful string methods
parrot = 'Norwegian Blue'
# len(), length of a string
print(len(parrot))
# lower(), downcases all the chars of the string
print("Mark".lower())
# upper(), upcase all the chars of the string
print("Mark".upper())
# str() turns a non-string into a string
example = str(599)

# Dot notation
lion = 'roar'
len(lion)
lion.upper()

# Methods that use dot notation only work with strings.
# len() and str() can work with other data types

# Concatenation
concat = 'Mark ' + 'Patrick' + 'Franciose'

# String interpolation
name = 'Mark'
print "Hello %s" % (name)

string = "Mark"
string2 = "Franciose"

print "My first name is %s. My last name is %s." % (string, string2)

# Other string methods:
s = 'string'
s.strip() # returns a string with whitespace removed from the start and end
s.isalpha() # tests if all the string chars are of various char classes
s.isdigit() # tests if the string chars of digits
s.isspace() # tests if the char(s) is a space 
# all of the isx() methods can be called on a whole string or an index of a str

