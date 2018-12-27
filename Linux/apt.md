### Useful flags
```
$ sudo apt-get install vim -q # "Quiet"
$ sudo apt-get install vim -qq # Double "quiet", less verbose & implied -y
```
### Sources list
located at ```/etc/apt/sources.list```
example: tracking stretch release, main & non-free components
```
deb http://mmm.debian.org/debian/ stretch main non-free
deb-src http://mmm.debian/org/debian stretch main non-free
```

deb / deb-src - archive type. deb = binaries, deb-src = source
url - repo url
release - track either release (jessie, stretch, buster) or release class (oldstable, stable, testing)
component - main, non-free, contrib - level of adherence to Debian standards.

with ```apt-transport-https```, can use the https version of urls.

```/etc/apt/sources.list``` can also include non-official Debian repos.

### Upgrading
```shell
$ sudo apt-get upgrade
```
vs.
```shell
$ sudo apt-get dist-upgrade
```
dist-upgrade will do some 'smart-upgrading', eg. managing uninstallation / updating of dependencies for different packages.
