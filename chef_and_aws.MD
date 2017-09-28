## Chef overview

- Born with the DevOps movement
- Understand DevOps success patterns
- Distilled these patterns into the Chef platform

- works for big enterprise and small shops
- try to integrate the best patterns.

chart: Chef manages change across the development pipeline

- Chef Compliance - scan for Compliance - AWS marketplace
- Chef Development Kit - Build & Test Remediation - OSS
- Chef Delivery - Validate & release - Chef Software Inc. (continuous delivery platform)
- Chef Server - remediate - AWS Marketplace
- Chef Analytics - AWS Marketplace

goal: to show how to stitch all the tools together.

demo repo: github/FastRobot/chef_aws_demo
*this is a simple app demo*


Cloud Formation Template (heart of the thing)
- Chef Server
- Preconfigured Ubuntu workstation
... takes about 30 minutes to set up.

What that workstations allow you to do... 

use test kitchen.
Test code to make sure it does the thing that you expect it to do. Give you fast feedback. 

Ok, now that you know your code works and does what its supposed to do - goes to Chef provisioning. What that dose it takes the app and deploys it the way you would do in production.

places all of that behind a load balancer.
models what this would look like in a production deployment.

Going to watch that in action.

### Using the demo repo.
- Follow the README
- Run CF template
- Stats two instances
	- Chef Server from AWS
	- Ubuntu workstation 
- Automatically configures Chef Server
- Auto configures workstation to auth with Chef Server
- Clones demo repo to workstation
- Need to accept the Chef Server marketplace EULA.

### Going through the demo


