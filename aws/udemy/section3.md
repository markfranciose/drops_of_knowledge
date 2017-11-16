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
Can be a virtual device (eg. alert on phone, Google Auth... )
or a physical fob that you'd have to buy.



## Lecture 11. Create a billing Alarm - Lab
- Enable Billing alert emails: Billing & Cost Management Dashboard -> Preferences -> [check] Receive Billing Alerts
- go to CloudWatch -> Alarms -> Create Alarm:
	- create name, description, threshold amount, notification email.

## Lecture 12. Summary
- IAM consists of the following:
	- Users
	- Groups (A way to group users & apply policies collectively)
	- Roles (can be AWS outside your org... other AWS resources)
	- Policy documents - JSON

- IAM is universal, no regions. 
- The root account is the first account created when setting up AWS, has complete Admin access.
- New Users have no permissions when first created.
- New Users are assigned an Access Key ID & Secret Access key when created. Not a password, can use the CLI and the APIs. Only viewed once, can destroy and re-create.
- Always set up MFA on your root account.
- You can create and customize your own personal password rotation policies.




