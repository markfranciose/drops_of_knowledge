

### Migrations with Booleans
Situation: Starting up a project and writing migrations.

```ruby
  def change
    create_table :dogs do |t|
      t.string  :name
      t.integer :people_years
      t.integer :dog_years
      t.boolean :is_top_dog

      t.timestamps
    end
  end
```
Problem: When writing methods on our ```Dog``` model ```is_top_dog``` is a
boolean. However, it is possible for ```is_top_dog``` to be ```NULL``` in the
database. A simple change can be made:

```ruby
  def change
    create_table :dogs do |t|
      t.string  :name
      t.integer :people_years
      t.integer :dog_years
      t.boolean :is_top_dog, null: false

      t.timestamps
    end
  end
```
Ok, so now a newly created ```Dog``` has to either be ```true``` or ```false```

If we're adding a boolean column, and a number of records exist, this won't work:
```ruby
add_column :dogs, :is_good_dog, :boolean, null:false
```
As existing records will be assigned ```NULL``` to ```is_good_dog```

Fix for this:
```ruby
add_column :dogs, :is_good_dog, :boolean, null:false, default:false
# default could as well be true
```
