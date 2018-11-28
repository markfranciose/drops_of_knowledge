```shell
docker ps --quiet | ForEach-Object {docker stop $_}

# this will give you a warning
docker system prune --volumes -all

Uninstall-Package -Name docker -ProviderName DockerMsftProvider
Uninstall-Module -Name DockerMsftProvider

Remove-Item "C:\ProgramData\Docker" -Recurse

Restart-Computer -Force
```




