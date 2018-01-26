####Create image using the pwd's Dockerfile####
docker build -t someimage 

####Run the 'someimage' mapping port 6666 to 80####
docker run -p 4000:80 someimage

####As above, but in 'detached' mode####
docker run -d -p 4000:80 someimage

####List all running containers####
docker container ls

####List all containers, including ones not running####
docker container ls -a

####Gracefully stop the container####
docker container stop <containerid>

####Force stop of the container####
docker container kill <containerid>

####Remove container from this machine####
docker container rm <containerid>

####remove all containers####
docker container rm $(docker container ls -a -q)

####List all images on machine####
docker image ls

####Remove an image####
docker image rm <image id>

####Remove all images####
docker image rm $(docker container ls -a -q)

####Login####
docker login

####Tag image####
docker tag <image> username/repo:tag

####Upload image####
docker push username/repo:tag

####Run image from a registry####
docker run username/repo:tag
