### Get an array of all the Models in the app
```ruby
# turn on eager loading
Rails.application.eager_load!
ActiveRecord::Base.descendants
```
note: this will include ```ApplicationRecord```

### Get all the IDs of a Model
```
Dog.ids
Dog.pluck(:id)
```

### Get all the 'some_attribute' of a Model
```
Dog.pluck(:color)
```
