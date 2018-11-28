EBS snapshots are backed up to s3 incrementally
EBS volumes persist indenpendently of the EC2 instance if you specify that on creation.
You cannot delete an EBS volume that is used as the root device of a registered AMI image. You'd need to de-register the AMI.
A Placement (cluster) group is for high network throughput and low latency in a single AZ
You can add IAM roles to EC2 instances after those instances have been created


A cluster placement group is a single AZ. When you see just 'placement group', that is what is probably meant, and thus you can't have it across multiple AZs.

An EBS volume can only be attached to a single instance at a time.
