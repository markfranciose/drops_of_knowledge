_Create image using the pwd's Dockerfile_
docker build -t someimage 

_Run the 'someimage' mapping port 6666 to 80_
docker run -p 4000:80 someimage

_As above, but in 'detached' mode_
docker run -d -p 4000:80 someimage

_List all running containers_
docker container ls

_List all containers, including ones not running_
docker container ls -a

_Gracefully stop the container_
docker container stop <containerid>

_Force stop of the container_
docker container kill <containerid>

_Remove container from this machine_
docker container rm <containerid>

_remove all containers_
docker container rm $(docker container ls -a -q)

_List all images on machine_
docker image ls

_Remove an image_
docker image rm <image id>

_Remove all images_
docker image rm $(docker container ls -a -q)

_Login_
docker login

_Tag image_
docker tag <image> username/repo:tag

_Upload image_
docker push username/repo:tag

_Run image from a registry_
docker run username/repo:tag



