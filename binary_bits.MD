Problem: Given an array of 1s a/o 0s representing a binary number convert into the decimal:

JS:
```
const binaryArrayToNumber = arr => parseInt(arr.join(""), 2);
```

Ruby:

``` 
def binary_array_to_number(array)
  array.join("").to_i(2)
end
```

Python: 
```
def binary_array_to_number(array):
  return int("".join(map(str, array)), 2)
```



