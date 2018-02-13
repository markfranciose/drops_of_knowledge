Delete empty lines:
```
:v/./d
```


Add char to end of a line/every line:
```
:%norm A,
:11,20norm A,
:%s/$/,
```

Add to start of a line:
```
:s/^/#
:%s/^/#
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


Get location of .vimrc in use:
```
:echo $MYVIMRC
```
