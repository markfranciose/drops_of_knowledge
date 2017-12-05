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



