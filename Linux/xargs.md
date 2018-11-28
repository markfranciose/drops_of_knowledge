xargs is useful for commands that can't be piped: 

We have the following directory:
```shell
-rw-r--r-- 1 cool cool  667 Jun 12 13:25 important_file
-rw-r--r-- 1 cool cool  667 Jun 12 13:24 log1.txt
-rw-r--r-- 1 cool cool  667 Jun 12 13:24 log2.txt
-rw-r--r-- 1 cool cool  667 Jun 12 13:24 log3.txt
-rw-r--r-- 1 cool cool  667 Jun 12 13:24 log4.log
-rw-r--r-- 1 cool cool  667 Jun 12 13:24 log9.extension
drwxr-xr-x 2 cool cool 4096 Jun 12 13:26 logs_dir
```

And we want to move all of the log files to different directory.

nada `mv` needs arguments w/ the file names:
```shell
ls | grep log | mv ../logs_go_here
```

bingo:
```shell
ls | grep log | xargs mv ../logs_go_here
```
