# Active Record Associations

## Why?
Allow for easier syntax, semantics. 

consider:
```ruby
class Dog < ApplicationRecord
end

class Owner < ApplicationRecord
end 

# create a new dog for an existing owner
@dog = Dog.create(name: "Fluffy", @owner_id: @owner.id)

# delete and owner and all their dogs
@dogs = Dog.where owner_id: @owner.id
@dogs.each { |dog| dog.destroy }
@owner.destroy
```

use associations: 
```ruby
class Dog < ApplicationRecord
	belongs_to :owner
end

class Owner < ApplicationRecord
	has_many :dogs, dependent: :destroy
end

# create a new dog for an existing owner
@dog = @owner.dogs.create(name: "Super Fluffy")

# delete an owner and all their dogs:
@owner.destroy
```

Rather than mimicing the SQL, pulling the corresponding record of the foreign
key, iterating through a set of such keys to hit all dependents Rails does it
for you. 

## Association types
```ruby
belongs_to
has_one
has_many
has_many :through
has_one :through
has_and_belongs_to_many
```

By declaring a ```belongs_to``` for instance, you tell rails to maintain the
foreign key / primary key relationship between the models.

### ```belongs_to```

```
SQL 
dogs									 owners
id				int		|----> id			int
name			text  |
owner_id	int --
```

```ruby
class Dog < ApplicationRecord
	belongs_to :owner
end
```
_ note: rails will infer the table name 'owners' via the symbol ```:owner``` _
_ so, make sure all of the ```belongs_to``` assocs are singular _

You can also create the association in the migration:
```ruby
class CreateDogs < ActiveRecord::Migration[5.1]
	def change
		create_table :owners do |t|
			t.string :name
			t.timestamps
		end

		create_table :dogs do |t|
			t.belongs_to :owner, index: true
			t.string :name
			t.timestamps
		end
	end
end
```
