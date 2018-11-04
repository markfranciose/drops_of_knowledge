

## 33 - How to use Putty.
( I use puTTY a lot )

## 37 - Create an AMI

## 38 - EBS Root Volumes vs. Instance Store
AMIs - choose by OS, region, architeture, storage (ebs vs. instance)

EBS - can be stopped, re-started under a different host if there is a hypervisor degradation or failure.
The volume is created from an EBS snapshot
Can keep the volume after the VM is terminated.

Instance Store/Ephemeral- Older, if the host goes down the VM goes down with it.
The root device is an instance launched from a template stored in S3.

