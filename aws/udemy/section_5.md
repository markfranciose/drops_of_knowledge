

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

## 39 - Load Balancing Theory
Load balancing, make sure no one server in a pool is overworked.

3 offerings on AWS: 
- Application - smart, operate on OSI level 7 (app layer)
- Network - high performance, millions of requests, ultra-low latency, operate on level 4
- Classic (Elastic - ELB): some features, mostly OSI 4, some lvl 7 features - X-forwarded-for headers

504 - gateway timeout, no response eithin timeout period. trouble shoot the app.

## 48 - Placement Groups

Clustered - low-latency, high throughput, close together instances. single AZ
Spead - critical application points that you want to keep geographically separate, multiple AZ 

Only certain types can be launched in a placement group - eg, bigger, nicer types.
Can't merge instances in a p. group, or merge p groups themselves togetgher.

