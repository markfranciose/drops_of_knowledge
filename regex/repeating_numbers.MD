\b(\d)\1+\b
Explanation:
```
	\b		# word boundary
	(\d)	# match digit and remember it
	\1+		# match one of more instances of previously matched digit
	\b		# word boundary
```

If a single instance of a digit (e.g. '2') would be matched, use:

```\1*	# match 0 or more instances of previously matched digit``` 
If you wanted to match patterns larger than a single digit:
"123123123" 

``` (\d+)  # match one or more instances of \d ```

If you want the entire string (line start, line end):
``` ^(\d)\1+$ ```

