adduser / useradd
useradd is native binary, adduser is PERL script. adduser bakes more features in. use man pages.

sets the gecos (realname, phone...etc) for the user.
```shell
adduser --gecos 'crud'
```

list users: cat the `/etc/passwd` file
remove user: `userdel -r <user>`
the r flag remove the home dir & files therein

        
