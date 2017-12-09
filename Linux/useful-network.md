### Check listening ports and applications

sudo lsof -i -P -n | grep LISTEN
- 'list open files'
- -i = network connections
- -P inhibits conversion of port numbers to port names for network files. 
- -n inhibits conversion of network numbers to host names for network files
* last two are to debug, make command run faster
- piped into grep, which will find all the lines with listen

### Check a specific port

```shell
sudo lsof -i tcp:80
# for listeners only
sudo lsof -iPn tcp:80 | grep LISTEN
sudo lsof -iPn tcp:80 -s tcp:listen
```
### Kill processes all on a specific port
```shell
sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill
```


