### Parse the query parameters of a GET request
```ruby
require 'uri'
require 'cgi'

raw_url		= "https://secure_dogs.net/search?id=200&dog_loyalty=true"
uri				= URI.parse(url)
params		= CGI.parse(uri.query)
# {"id"=>["200"], "dog_loyalty"=>["true"]}

id_field	= params["id"].first
# "200"
```
