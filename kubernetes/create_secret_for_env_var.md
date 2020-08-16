## Creating a secret to set an ENV var in a container

1. Method one: using ```create secret```

```shell
$ echo "mark is cool" > mark.txt
$ echo "mark is sweet" > mark2.txt
$ kubectl -n dev create secret generic markattributes \
	--from-file=./mark.txt --from-file=./mark2.txt
```

Note: Your secret Name must be a DNS-1123 subdomain must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character.





