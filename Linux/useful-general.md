Copy /source to /dest:
```shell
cp -a /source/. /dest/
# -a same as recursive, put preserves file attributes and symlinks
# . at the end of the path is specific to cp and copies all files and folder, including hidden
```


_kill process 1234_
kill -9 1234
* 9 is just SIGKILL

_list all users_
```cat /etc/psswd```

replace recursively
```shell
find ./dir -type f -print0 | xargs -0 sed -i 's/old/new/g'
```

Useful non-core programs:
cloc - Count lines of code
