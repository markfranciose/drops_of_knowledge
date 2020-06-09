# IN PROGRESS
## Dev-ops/Operations/Infrastructure/Cloud/Deployment/Servers/Cattle


### Purpose
The purpose of this section is to introduce you to the wonderfully crowded clusterfun that is "getting your app on the actual internet".

## Part One: Pets

First, [this blog post](http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle) contains a central analogy that is helpful in understanding different approaches to getting an app actually running and available to people. Don't worry about all the mumbo-jumbo, understand the basic point. While for large stable production applications we want to be herding cattle, it's easier to start with pets. We're going to be taking an app and and putting it on THE INTERNET in the simplest way possible.

[Link to the Exercise](https://github.com/markfranciose/okok)

### Purpose
The purpose of this part is to successfully deploy a simple application on AWS.

### Background
> “The thing that hath been, it is that which shall be; and that which is done is that which shall be done: and there is no new thing under the sun.” -- Taylor Swift 

Servers (basic client <-> server model understanding). Now back in my day, you needed an actual machine to run a server. So, to launch an app one needed to purchase a server, install the hardware, software... etc. To expand, buy more servers. To scale down... you've already bought the servers. Luckily for you, we're not going to do this. We're going to use Amazon Web Services to set up a virtual machine that will act as the server which hosts our app.

Virtual Machines are not new, they're an old concept. Commonly, when you hear virtual machine what someone means is (hypervisor-guest) in the cloud. Specific instance Amazon had lots and lots of extra computing power that they weren't always using... lease that out to people - distinct part of an amazon server that you can run your stuff in. THis is the premise behind what the cloud providers do. We're going to use Amazon's most basic solution - EC2 - Elastic Compute Cloud - where you get VMS.

Using the dashboard:
`Ubuntu Server 16.04 LTS (HVM), SSD Volume Type`

Set it up
t2.micro ->
defaults IAM, VPC, spot instances
(a cloud guru)
storage - 8 is fine.
no tags (management) 
Security Group - type all traffic - anywhere.
launch

create key pair -> 
certificates
what is going on conceptually
port 22

Let's login

```ssh -i *your key* ubuntu@*your server IP*```
first time getting into this machine.

```shell 
ECDSA key fingerprint is SHA256:T0s6lzH7sjVUW2t4ozQs24fxqaFvH0wQIdgDLmd2OXA.
Are you sure you want to continue connecting (yes/no)? 
```
BAM! No no no.

```shell
Warning: Permanently added '18.223.133.195' (ECDSA) to the list of known hosts.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for 'key1.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "key1.pem": bad permissions
Permission denied (publickey).
```

``` chmod 600 *key.pem*``` 

You are in the home directory of the VM.

```git clone```

Install Ruby: 
- run the normal
host the app

Go to the

Using the CLI:


What we're going to do: 
- provision an AWS VM

### Instructions
First, clone [this repo](https://github.com/markfranciose/fake_app)



