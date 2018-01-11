# Various Ruby Trocks 


### Build an array of words

```
%w(how much wood could a wood chuck chuck)
# ['how', 'much', 'wood', 'could', 'a', 'wood', 'chuck', 'chuck']
```
be careful though. Because this:

```
string = "how much wood could a wood chuck chuck"

%w(string)

# returns ['string']
```

### Quickly get the count of number of words in an array

```
array = ['how', 'much', 'wood', 'could', 'a', 'wood', 'chuck', 'chuck']

counts = Hash.new(0)

array.each do |word|
	counts[word] += 1
end

# {"how"=>1, "much"=>1, "wood"=>2, "could"=>1, "a"=>1, "chuck"=>2} 
```

### The =~ operator

The =~ operator compares a regex with a string, and returns (the index of the string that the regex starts.)
```ruby
"cool beans" =~ /bean/ 	# 5
/\s/ =~ "cool beans" 	# 4`
```
### List all of your gems and versions.
```shell
gem list
```
### List gems with updates available:

```shell
gem outdated
```
