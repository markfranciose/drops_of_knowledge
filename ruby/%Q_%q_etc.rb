# %Q acts like a double quote delimiter

percent_Q = %Q("This is a string" and it can include double quotes without escaping)
# useful if you have a string with double quote marks.

puts percent_Q

# %q does the same for single quotes

single_quotes = %q('this is a string' and it can include quotes without escaping)

puts single_quotes

