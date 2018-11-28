Installation instructions for platforms are in INSTALL.<platform>

### basic locking on new server create
```adduser``` will create the user with a familiar interactive prompt
be sure to add the user to the ```wheel``` group, will want it to be able to execute commands as a root user.
edit ```/etc/doas.conf``` as root:
```shell
permit nopass :wheel
```
add a key to the new users ```/home/new_user/.ssh/authorized_keys```
edit ```/etc/ssh/sshd_config``` with following directives:
```shell
PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
```
find the sshd pid ```ps -aux | grep sshd```
send HUP to it with ```kill -HUP <sshd pid>```

### packages
make sure ```/etc/installurl``` points to a correct repo. Such as:
```https://cdn.openbsd.org/pub/OpenBSD/```


