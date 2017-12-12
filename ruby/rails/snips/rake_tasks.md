Use a generator to create a rake task:

```shell
rails g task your_namespace task1 task2 task3
=> create lib/tasks/your_namespace.rake
```

Will create the following:
```ruby
namespace :your_namespace do
	desc "TODO"
	task task1: :environment do
	end

	# and so on...
end
```

### List rake tasks:

```shell 
rake -T
```

search for tasks:
```shell
rake -T | grep search
```

### Run Multiple Rake Tasks as One Task
```ruby
	desc 'reset the database'
	task reset-db: ["db:drop", "db:create", "db:migrate", "db:seed"]
```

### Rake Task in specific environment
```shell
rake walk_dogs:normal RAILS_ENV=raining-dogs
```
