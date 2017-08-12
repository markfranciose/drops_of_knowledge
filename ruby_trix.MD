# Various Ruby Trocks 

### The =~ operator

The =~ operator compares a regex with a string, and returns (the index of the string that the regex starts.)
```ruby
"cool beans" =~ /bean/ 	# 5
/\s/ =~ "cool beans" 	# 4`
```
