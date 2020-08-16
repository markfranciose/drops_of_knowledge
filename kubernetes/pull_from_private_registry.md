# Steps to pulling a docker image from a private registry

1. Login to registry via docker to create ```config.json```
```shell
$ docker login <registry.address>
```
This will prompt for the uname and passwd. After that is entered the ```config.json``` file will be created in ```~/.docker/config.json```.

Note: If your user needs to use ```sudo``` to run docker commands, the ```config.json``` will be in the ```/root/.docker/``` directory. 

the ```config.json``` will look like this:
```json
{
    "auths": {
        "https://<registry.address>": {
            "auth": "<abC...xYz>"
        }
    }
}
```

2. Turn ```config.json``` into a Kubernetes secret
```shell
$ kubectl create secret generic <secret_name> \
	  --namespace=<namespace> \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```
This will generate the secret in the namespace provided (remember secrets are limited to a single namespace) 

3. Use the secret in a deployment ```.yml``` file
In the configuration of a deployment the the container registry creds are added like so:
```yaml
...
    spec:
      containers:
      - image: <registry>/<image>:<tag>
        imagePullPolicy: IfNotPresent
        name: <some_deployment>
        ports:
        - containerPort: 2002
          protocol: TCP
			#### PRIVATE REGISTRY SECRET BELOW ####
      imagePullSecrets:
      - name: <secret_name>
			######################################
...
```

