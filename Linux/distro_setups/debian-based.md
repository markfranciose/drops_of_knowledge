node
```shell
curl -SL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

for node 9 replace the 8 above with 9..

build-essential:
```shell
sudo apt-get install -y build-essential
```

php:
```shell
sudo apt-get install php # base php 7
# useful php dev items
apt-get install php-pear php7.0-dev php7.0-zip php7.0-curl php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-xml libapache2-mod-php7.0
```

mysql:
```shell
sudo apt-get install mysql-server
```

postgresql:
```
sudo apt install postgresql postgresql-client
```

python:
```
python3 -V # should be installed
sudo apt-get install -y python3-pip
sudo apt-get install build-essential libssl-dev libffi-dev python-dev
```

docker:
```
# docker dependencies
#     apt-transport-https
#     ca-certificates
#     curl
#     gnupg2
#     software-properties-common

# add docker GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

# (test key, current 0EBFCD88)
sudo apt-key fingerprint 0EBFCD88

# add repo, append edge after 'stable' to add edge repo
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"

sudo apt update

sudo apt install docker-ce
```

yarn:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
