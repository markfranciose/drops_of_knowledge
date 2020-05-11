#!/usr/bin/env bash
# @description script to create a k8s docker registry secret from config file
# @author Mark Franciose <mark.franciose@gmail.com>

# login to docker, follow the prompts, that will create a config file (TODO - where??)
docker login

kubectl create secret generic docker-registry-example \
  --from-file=.dockerconfigjson=/path/to/.docker/config.json \
  --type=kubernetes.io/dockerconfigjson

