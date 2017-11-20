1. S3 has what consistency model for PUTS of new objects?
Read After Write Consistency
_correct_

2. What is AWS Storage Gateway?
An on-premise virtual appliance that can be used to cache s3 locally at a customers site.
_correct_

3. A user is trying to upload a 7.5GB file to S3, keep getting the 'exceeds maximum allowed object size' error. What is a solution? 
Design your application to use the multi-part upload API for all objects.
_correct_ 

4. What does RRS stand for when talking about S3?
Reduced Redundancy Storage
_correct_

5. You are creating a bucket "cool1234" in the EU West Region. What would be the URL for this bucket?
https://s3-eu-west-1.amazonaws.com/cool1234
_correct_

6. What is Amazon Glacier?
An AWS service designed for long term data archival.
_correct_

7. What does S3 stand for?
Simple Storage Service
_correct_

8. Folks want a bucket in Japan called 'test-bucket'
Bucket names are global, not regional. That's a popular name and is already taken. Choose another bucket name.
_correct_

9. Availability on RRS?
99.99%
_correct_

10. Durability on RRS?
99.99%
_correct_

11. Durability on S3?
99.999999999 11 nines
_correct_

12. Availability on RRS?
99.99
_correct_

13. Minimum file size I can story on s3?
1 byte / 0 bytes
_correct_ 

14. The difference between s3 and EBS is that EBS is object based and s3 is block storage?
False. The opposite is true.
_correct_ 

15. S3 has eventual consistency for which HTTP Methods?
overwrite PUTS and DELETE
_correct_

16. You work for a busy digital marketing company who currently store their data on premise. They are looking to migrate to AWS S3 and to store their data in buckets. Each bucket will be named after their individual customers, followed by a random series of letters and numbers. Once written to S3 the data is rarely changed, as it has already been sent to the end customer for them to use as they see fit. However on some occassions, customers may need certain files updated quickly, and this may be for work that has been done months or even years ago. You would need to be able to access this data immediately to make changes in that case, but you must also keep your storage costs extremely low. The data is not easily reproducible if lost. Which S3 storage class should you choose to minimise costs and to maximise retrieval times?
S3 - IA
_correct_

17. You need to use an Object based storage solution to store your critical, non replaceable data in a cost effective way. This data will be frequently updated and will need some form of version control enabled on it. Which S3 storage solution should you use?
s3
_correct_

18. You work for a health insurance company who collects large amounts of documents regarding patients health records. This data will be used usually only once when assessing a customer and will then need to be securely stored for a period of 7 years. In some rare cases you may need to retrieve this data within 24 hours of a claim being lodged. Which storage solution would best suit this scenario? You need to keep your costs as low as possible.
Glacier
_correct_

19. You run a meme creation website that frequently generates meme images. The original images are stored in S3 and the meta data about the memes are stored in DynamoDB. You need to store the memes themselves in a low cost storage solution. If an object is lost, you have created a Lambda function that will automatically recreate this meme using the original file in S3 and the metadata in Dynamodb. Which storage solution should you consider to store this non-critical, easily reproducible data on in the most cost effective solution as possible?
S3 - RRS
_correct_ 

20. You run a popular photo sharing website that is based off S3. You generate revenue from your website via paid for adverts, however you have discovered that other websites are linking directly to the images on your site, and not to the HTML pages that serve the content. This means that people are not seeing your adverts and every time a request is made to S3 to serve an image it is costing your business money. How could you resolve this issue?
Remove the ability for images to be served publically to the site and then used signed URL's with expiry dates. 


