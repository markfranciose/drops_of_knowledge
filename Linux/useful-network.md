### Check listening ports and applications

sudo lsof -i -P -n | grep LISTEN
- 'list open files'
- -i = network connections
- -P inhibits conversion of port numbers to port names for network files. 
- -n inhibits conversion of network numbers to host names for network files
* last two are to debug, make command run faster
- piped into grep, which will find all the lines with listen
