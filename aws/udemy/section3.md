# Section 3

## Lecture 9 IAM intro

What does IAM give you?
- Centralized control of your AWS account
- Shared access to AWS account
- Granular permissions
- Identity Federation (Active Directory, Facebook, Linkedin)
- Multifactor Authentication
- Provide temporary access for users/devices and services where needed
- Allow you to setup your own password rotation policy
- Integrates with many AWS services
- PCI DSS Compliance

Terms
- Users - End Users
- Groups - A collection of users under one set of permissions
- Roles - Create roles and assign them to AWS resources
- Policies - A document that defines one (or more) permissions

## Lecture 10 IAM Lab

IAM settings are independent of region.

create an account alias... a unique name to use for IAM signin, rather than the large account #
root account - email addy used to sign up with AWS. unlimited access to everything out there. Amazon advises only sign into root accounts when needed, give our groups for other permissions.

Security settings: 
MFA (Multi-factor authentication.)
follow directions to configure.


