#### Disable password login

edit ```/etc/ssh/sshd_config```
use the following directive values:
```shell
PasswordAuthentication no
ChallengeResponseAuthentication no
```
restart the sshd service with ```sudo service sshd restart``` and viola.

#### Add user to sudo 
If no sudo install from ports @ ```/usr/ports/security/sudo```

run ``` $ sudo visudo ```
add to sudoers file:
```
mark ALL=(ALL) NOPASSWD: ALL
```
or
```
mark ALL=(ALL) ALL
```
to require a password whenever ```sudo``` is used.

#### Update OS 
```sudo freebsd-update fetch install```
if a kernel update has been installed restart with ```sudo shutdown -r now```

#### set update checking
in ```/etc/crontab``` (the root crontab)
```shell
@daily root freebsd-update -t <user_to_mail> cron
```
will send a daily list of updates, that can be viewed by the ```mail``` command of the selected user
will still need to use the ```freebsd-update install``` command

#### Using Ports:
Get the ports:
```shell
$ portsnap fetch extract
```
go to ```/usr/ports``` , go through the dir stucture to select a port.
quick way to search: ```$ echo /usr/ports/*/*sudo*/

Do a make for the port you want to use.
```shell
$ make install clean
```

#### getting freebsd source
get version: ```freebsd-version -k```, or ```uname -a```
fetch tarbarll: ```fetch ftp://ftp.freebsd.org/pub/FreeBSD/releases/amd64/<RELEASE>/src.txz```
untar it: ```tar -C / -xzvf src.txz```

