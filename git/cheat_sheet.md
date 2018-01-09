### Checking branches:

List local branches
```shell
git branch # list local branches
git branch -a # list local and remote branches
git branch -r # list only remote branches
```
Squash multiple recent local commits into one:
```shell
git reset --soft HEAD~20 &&
git commit
```
