
DL the enterprise edition (free w/ Windows Server) NOT the community edition

```Error response from daemon: Get https://xxx.xx.xxx.xx:5000/v1/_ping: http: server gave HTTP response to HTTPS client```
create file @ ```C:\ProgramData\docker\config\daemon.json```
add to json: 
```json
{ "insecure-registries":["just.serv.er.port:5000"] }
```

```
Stop-Service docker
Start-Service docker
```
