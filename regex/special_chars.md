^ = beginning of the string or line if multi-line flag used.
```ruby
/^m/	# matches m in 'mark'
/^m/	# no match in 'tank', as first char isn't 'm'
/^/		# matches entire string in 'mark drove a tank', nothing after the
		# '^' to define what it should match
/^\w+/	# matches from start (if start is word char) to end of word chars
        # (e.g. a '^' can be used with other classes...etc)
```
