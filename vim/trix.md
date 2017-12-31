Delete empty lines:
```
:v/./d
```

Append to end of every line:
```
:%s/$/<--- ending dog
```
```
% - for each line
s - substitute
$ - EOL
dog - text to substitute
```
method 2:
```
:%norm Awoof
```
```
%			- for each line
norm	- type the following commands
A			- append
woof  - text to append
