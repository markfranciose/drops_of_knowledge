## S7 Elasticache
deploy, operate and scale an in-memory cache in the cloud. Just caches things.
Improve latency and throughput for read-heavy workloads. Critical pieces of info in memory
- 2 different engines:
1. Memcached. Memcached tools will work directly.
2. Redis. sorted sets and lists. Multi-AZ capabilities,

Given a scenario where a DB is under a lot of stress. Elasticache is a good choice if the workload is read-heavy and not prone to frequent changes.

Redshift is a good choice if the DB stress is caused by mgmt running OLAP transacttions on it.

## S7 Aurora
AWS proprietary, MySQL compaitble. Speed and availabilty of high-end commercial databases with the simplicity and cost effectiveness of FOSS DBs. Less costly than Oracle... etc.
(Aurora... no questions just yet).
Starts w/ 10 GB, scales to 64TB. Autoscales
Compute can scale to 32vCPUs, 244GBs
2 copies of DBin each AZ, min of 3 AZs.
Highly redundant, self-healing.
2 types of replicas -
Aurora Replicas (15) - failover.
MySQL read replica (5)

