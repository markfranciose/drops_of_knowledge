### Change default password length
_note: this will run in addition to any custom password validations_
Globally:
```ruby
# in ./config/initializers/devise.rb

config.password_length = 10..128
```
In a model:
```ruby
class Dog < ApplicationRecord
	devise :database_authenticatable, :validatable, password_length: 10..128
end
```

