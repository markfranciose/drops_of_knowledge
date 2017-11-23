# Section 5

## Lecture 42 - Bootstrap scripts

_much of this lecture is basics about bash and scripting_

In the make role section at the bottom:
```shell
#!/bin/bash
yum httpd -y
echo and so on...
```

will run the script on creation of the EC2 instance.

## Lecture 43 - Instance Metadata
__important for exam__
How to get the metadata, what it is and what it means.

to access: curl http://169.254.169.254/latest/meta-data
returns a bunch of variables. type them into the end of the url and get 
