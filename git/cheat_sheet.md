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











