Assume that we've got a deployment running:
```shell
$ kubectl -n dev get deployments 

# NAME        READY   UP-TO-DATE   AVAILABLE   AGE
# dev         0/2     1            0           2d13h
```
The following command will create a service w/ an exposed endpoint:
```shell
$ kubectl -n dev expose deployment dev \
	--type=LoadBalancer \
  --name=dev

<service creates>

$ kubectl -n dev get service dev 

# NAME         TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)    AGE
# dev          LoadBalancer   10.3.245.137   111.111.111.11   8080/TCP   54s
```


