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
