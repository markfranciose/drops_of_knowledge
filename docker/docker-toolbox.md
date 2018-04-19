Adding insecure registries to a docker-machine already created

```shell
# shell into the VM
docker-machine ssh machine_name

# edit profile
sudo vi /var/lib/boot2docker/profile
```

```shell
# if EXTRA_ARGS doesn't exist, create it.
EXTRA_ARGS="

"

# add addresses as below, save & exit vi.
EXTRA_ARGS="
-- insecure-registry 123.34.456.0:5000
-- insecure-registry 123.34.556.0:5000
"

```
```shell
# exit out of SSH
exit

# restart docker VM
docker-machine restart machine_name

```
Now you should be good to go.
