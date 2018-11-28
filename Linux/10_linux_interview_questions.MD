# Top 10 Linux interview questions

## 1. How do you check the kernel version?

```
uname -a 
uname -v
uname -r
```
For all info, version, and release respectively.

## 2. How do you determine the IP address?

```shell
ifconfig
ip address show
ip address show eth0
```

older way, newer way, only the eth0 device

## 3. How do you show the free disk space?


```
df -ah
```
short for 'disk free'
-a = all
-h = human readable

## 4. Manage a service?

start/stop service
see if a service is running?
older system: 
service udev status 

systemctl vs. service
- depends on what you are using.

## 5. Check the size of a directory's contents on disk?


```
du -sh test
```
disk use -s? -human readable, name of dir

## 6. How would you check for open ports on a Linux machine?


```
netstat
```
-tulpn is a good one.

## 7. Check CPU usage of a given process.


```
ps aux | grep nginx
```
read up on ps


```
top
htop... need to install.

```

## 8. Mount a new hard drive to your system?


```
ls /mnt
mount /dev/sda2 /mnt
mount
```
/mnt is where all the drives are mounted
mount - lists all the mounts.
etc/fstab - which mounts on boot?

## 9. How do you look up stuff that you don't know?

man ps
man top

## 10. How do you look up if there is no man page?

google
stack overflow... etc.
