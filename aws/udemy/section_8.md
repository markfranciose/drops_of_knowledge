# Section 8   
## Intro Lecture.
note: VPCs very improtant for all associate level exams.

logically isolated section of AWS>
subnets, multiple security controls.
can use a VPN to connect to existing datacenter

Region -> VPC (CIDR address range) -> Subnets -public & private
connect via VPN/internet gateway. -> Router -> Route Table -> NetworkACL -> individual subnets.
one subnet = one availabilty zones.
allows lots of different IP ranges 
smallest range = /28, 16 IPs

CIDR.xyz, plan out VPC.

launch instances into a subnet you choose. 
Assign custom IP addy ranges in each subnet
config route tables between subnets - which subnets can speak to which others.
create internet gateway and connect to VPC. One internet gateway to VPC.
Much better security control - subnets, network ACLs, instance security groups.
Subnet network access control lists

Default VPC v. Custom VPC
- default VPC is user friendly, allows you to immediately deploy instances.
- All subnets in default VPC have a route out to the internet
- each ec2 instance has a public and private IP address.

VPC Peering
Allow you to connect one VPC to one another via a direct network route using private IP addresses.
can peer VPCs with other AWS accounts. Peering is always hub and spoke, no tran

Exam Tips
- Think of a VPC as a logical datacenter in AWS.
- Consists of IGWs, or VPGs, Route Tables, NACLs, Subnets, Security Groups.
- 1 subnet = 1 AZ
- Security Groups are stateful , NACLs are stateless
- No transitive peering
