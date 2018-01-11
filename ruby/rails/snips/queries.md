match part of a column with a query:
```ruby
Dog.where("favorite_joke LIKE ?", "%#{params[:dog_quip]}%")
# PSQL case insensitive: 
title = "MASTER"
Dog.where("title ILIKE ?", "%#{title}%")
```

GET query params:
```ruby
# the normal Rails params hash will contain GET query strings
# dogsite.com/dogs?tail_required=true

def dog_index
	if params[:tail_required]
		@dogs = Dog.where(has_tail: true)
	else
		@dogs = Dog.all
	end

	render json: @dogs
end
```
[Ruby-only way of pulling params from a query](https://github.com/markfranciose/drops_of_knowledge/blob/master/ruby/parse_url_query_string.md)
