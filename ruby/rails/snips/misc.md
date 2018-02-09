disable pry in console:
```ruby
	DISABLE_PRY_RAILS=1 rails c
```

case changing, casing, magic:
```ruby
# .tableize (underscore and pluralize)
"CamelCaseDogs".tableize		# => "camel_case_dogs"
"CamelCaseDog".tableize			# => "camel_case_dogs"
# .underscore
"CamelCaseDogs".underscore	# => "camel_case_dogs"
"CamelCaseDog".underscore		# => "camel_case_dog"
"javaCaseDog".underscore		# => "java_case_dog"
"lowercasedogs".underscore	# => "lowercasedogs"
"ALLCAPSDOGS".underscore		# => "allcapsdogs"
# .camelize
"snake_dog".camelize				# => "SnakeDog"
```

find the PID of the server
```shell
$ cat ~/rails_project/tmp/pids/server.pid
=> 1234
```
