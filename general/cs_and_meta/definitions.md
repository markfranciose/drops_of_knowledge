associative array: key value pairs data type, each key can appear only once. aka
dictionary, map, symbol table.

checksum: A hash function, used to verify data integrity, eg. that it hasn't
been corrupted or altered. You compare your data against a published checksum.

downstream: away from the developers or maintainers of a software. Eg. I update
my software to add a feature, and send the update downstream. Anyone forked off
of my software and apply the patch.

filesystem: How data is stored and retrieved in a system. Large variability at
the highest level. In practice, mostly refers to storage devices.

firmware: A class of software that provides low-level functionality for a
specific piece of hardware.

hash function: Any function that can be used to map data of an aribtrary size
to a fixed size. ( cryptographic ) hash function: Above, suitable for crypto.
eg. infeasable to reserve/invert.

hash table: implements an associative array data structure to map keys to
values. ideally, each key gets a unique bucket. rather than search through
whatever the number of items, just hash the input and go to that location.

node: data point within a larger sturcture.

tree: heiarchical data structure with a root value, and subtree of parents w/
children nodes linked together.

upstream: toward the original developers or maintainers of a software. Eg. I
discover a bug, write a patch, and send that patch upstream, for a future
release.
