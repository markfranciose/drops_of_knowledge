basic scan: ```nmap ekta.co```

multiple networks:
range:         ```nmap 192.192.192.100-200```
wildcard:      ```nmap 192.192.192.*```
CIDR notation: ```nmap 192.192.192.0/24```
from file      ```name -iL /path/to/file.txt```

excludes:
list them      ```nmap 192.192.192.0/24 --exclude 192.192.192.111, 192.192.192.110```
from file      ```nmap -iL /path/to/file.txt --exclude /path/to/exclusions```

agressive scan ```nmap -A ekta.co```




