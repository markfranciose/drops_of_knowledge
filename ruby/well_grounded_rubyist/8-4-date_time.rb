require'date'

# Constructors: .today .new .parse
today = Date.today
puts today

my_birthday = Date.new(1983, 12, 17)
puts my_birthday

# Date.parse will try to make sense of whatever string you give.

# with only two digits for the year:
# 0 - 68: 2000
puts Date.parse("01/01/01")
# >= 69
puts Date.parse("69/12/17")

# Time
# Constructors: .new .now .at .local .mktime .parse
now = Time.new
puts now
# alias
now_also = Time.now
puts now_also


some_other_time = Time.at(100000000)
puts some_other_time

puts Time.mktime(2020, 10, 1, 1, 1, 1, 1)

# Using the .parse constructor requires the inclusion of the Time module
require 'time'
# Without a passed date, Ruby will assume today
parsed_time = Time.parse("20:40 PM")
puts parsed_time

date_and_time = Time.parse("September 2nd, 2004 12:20:20am")
puts date_and_time


