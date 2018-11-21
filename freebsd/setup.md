#### Disable password

edit ```/etc/ssh/sshd_config```
use the following directive values:
```shell
PasswordAuthentication no
ChallengeResponseAuthentication no
```

restart the sshd service with ```sudo service sshd restart``` and viola.

Using Ports:
```shell
$ portsnap fetch
```
```shell
$ portsnap extract
```
go to ```/usr/ports``` , go through the dir stucture to select a port.

Do a make for the port you want to use.
```shell
$ make install clean
```



