# single line comments start with a '#'
# assign variables with the name and an '=' sign
elmo = 7

my_int = 7
my_float = 1.23
my_bool = true # or false, downcase in ruby

def spam
  eggs = 12 # ruby identation doesn't affect the block, but the 
  	    # normal indentation styling is followed
	    # a method starts with a def, ends with an end
	    # ruby also has an implict return, that is, the last line of the method is automatically returned
end

=begin
  In Ruby =begin, and =end specifies a multiline comment 
=end

addition = 10 + 2
subtraction = 10 - 3
multiplication = 10 * 3 
division = 10 / 3 # By default, with two ints Ruby will perform integer diviion, e.g. there will be a remainder, 10 / 3 will return 3
