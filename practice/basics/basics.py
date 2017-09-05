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


