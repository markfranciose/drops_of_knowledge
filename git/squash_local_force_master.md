## Don't do this on repos w/ other peeps. 

```shell
# squash the commits locally
git rebase -i origin/master~200 master

# force the commits to remote
git push origin +master
```
