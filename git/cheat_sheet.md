### Checking branches:

List local branches
```shell
git branch # list local branches
git branch -a # list local and remote branches
git branch -r # list only remote branches
```

Compare 2 branches
```shell
git diff branch_1..branch_2
# compare from common ancestor
git diff branch_1...branch_2
```

remove untracked files
```
git clean -n # shows you the files
git clean -f # force deletes the files
```

change email - single repo
```shell
git config user.email "steve.irwin@crocs.net"
git config user.name  "Steve Irwin"
```

change email - all repos
```shell
git config --global user.email "wendy.richter@wwe.com"
git config --global user.name  "Wendy Richter"
```

