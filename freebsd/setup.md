#### Disable password login

edit ```/etc/ssh/sshd_config```
use the following directive values:
```shell
PasswordAuthentication no
ChallengeResponseAuthentication no
```

#### Add user to sudo 
```shell
$ sudo visudo
```
add:
```
mark ALL=(ALL) NOPASSWD: ALL
```
or
```
mark ALL=(ALL) ALL
```
to require a password whenever ```sudo``` is used.

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



