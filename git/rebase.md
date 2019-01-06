### squashing
```shell
$ git rebase -i HEAD~4
```

```shell
pick b76d157 b
pick a931ac7 c
pick 82af291 d
pick 91c9a10 e
```
you need to squash upward

```shell
pick b76d157 b
pick a931ac7 c
squash 82af291 d
squash 91c9a10 e
```



## Don't do this on repos w/ other peeps. 

```shell
# squash the commits locally
git rebase -i origin/master~200 master

# force the commits to remote
git push origin +master
```
