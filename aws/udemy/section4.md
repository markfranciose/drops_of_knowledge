Section 4: S3

S3: Simple Storage Service
secure, durable, highly-scalable object storage. 

Object v. Block based
-object = flat files, pics, docs... etc. not for OS or DB.
block based - 

allows you to upload files
0 bytes to 5tb,
"unlimited storage"
Files are stored in buckets
universal namespace - names must be globally unique

dns addrss: 
https://s3-eu-west-1.amazonaws.com/cooldude
region-amazonaws/bucketname

when you upload a file successfully youget a 200 code.

Data Consistency Model:
Read after write consistency for PUTS of new objects. After first write... immediately accessable.

- Eventual consistency for overwrite PUTS and DELETES... can take some time to propegate

s3 key, value story.
key = name of object. 
	- value (the data)
	- version ID
	- metadata 
	- subrecources
		- access control lists (fine grain permissions)
		- torrent 

LOG data w/ date time... if writing a file per second... can stored in same location and create performance bottlenecks... can add a salt at the beginning of the filename.

99.99 % availability
99.99999999999% 11 9s durability. won't lose a file.
tiered storage

lifecycle mgmt. (after 30 days move here, after 90 archive)

s3 - normal, immediate access, made to survive loss of 2 facilities conconcurrently
ia (infrequent access) - less frequent but needed quickly. lower fee, but charged retrieval.

rrs - data that can be easily generated again if file is missing: keeping thumbnails

glacial - archival only. 3-5 hours to restore from Glacier.

charged for: 
storeage
requests
storeage mgmt pricing - add tags & track costs.
data transfer pricing... moving around in s3 
transfer accelleration - fast secure over edge locations bucket in london... ppl actually upload to edge locayion.. better connection to the buckets.


## Lab 



server side encryption 
Amazon s3 managed keys (sse-s3)
KMS - SSE-KMS
SSE - C - Customer provided keys

## 15 Version control:

Versioning = once enabled it's there. can suspend, but that doesn't get rid of previous versions.
large files that are prone to change... don't do versioning... storage will go up up up.


Google AWS Versioning : in depth about how versioning works. 

MFA delete - change version state or delete object version.
What to do if you want to prevent people from accidentally deleteing files in a bucket.

Exam Tips for Versioning
- Stores all versions of an object (including all writes and even if you delete an object.)
- great backup tool.
- once enabled cannot be disabled, only suspended.
- integrates with lifecycle rules
- MFA capacity. 

## 16 Cross Region Replication - Lab

enabling crr does files going forward.


For copying existing files:

aws s3 cp --recursive s3://bluckname1 s3://bucketname2
permissions follow the file to the target..
deletions don't follow aall the way... 
so, versioning can be tricky with CRR.

Exam Tips for CRR
- Versioning must be enabled on both the source and destination buckets. 
- regions must be different.
- Files exitsting are not replicated automatically, future updates are.
- You cannot replicate to multiple buckets or daisy chain- for the time being.
- Dekete arkers are replicated.
- Dekete indivudyak vesions of deleted markers not replicated.
- Understand CRR at a high level.

## 16 - Lab Lifecycle mgmt and Glacier.

Exam Tips for Lifecycle MGMT
- can be used in conjnction with version (or not)
- can be applied to current versions and previous versions.
- following actions:
	- transition to standard - IA (128 kb file, 30 days after creation)
	- to glacier, at least 30 days after transition to IA.
	
