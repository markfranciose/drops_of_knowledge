#!/usr/bin/env bash
# @description - create k8s docker registry secret from cli w/o docker config
# @author Mark Franciose <mark@ekta.co>

kubectl create secret docker-registry docker-registry-example \
  --docker-server=<https://index.docker.io/v1> \
  --docker-username=<cool_dude> \
  --docker-password=<password> \
  --docker-email=<email>
