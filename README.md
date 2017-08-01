# cheat_sheet_of_cheat_sheets
a cheat_sheet of cheat_sheets

## ReST ReSOURCES

- [RESTular](http://www.restular.com/)

# SNIPPETS!

## Active Record

### Migrations

#### create_table:
```ruby
create_table :suppliers do |t| 
  t.string :name
  t.integer :supplier_code
  
  t.timestamps
end
```

#### constraints
```ruby
create_table :cool_people do |t|
  t.string :name, null: false
  t.string :email, unique: true
  
  t.timestamps
end
```

#### add_column: 
```ruby
add_column(:suppliers, :qualification, :string)
```

#### remove_column:
```ruby
remove_column(:suppliers, :qualification)
```


## jQuery

wrapping a function in .ready:
```js
$(document).ready( function() {
  // some code
});
```

DOM traversing: 
```js
// .find()
$("#vacations").find(.america) // search through the descendants of a DOM element.
// .find()
$("#vacations li").first() // construct a new jQ object from the first element in a set.
// .last()
$("#vacations li").last() // as above, new jQ object of the last element of set
// .prev()
$("#vacations li").last().prev() // as above, but the previous (one up) element of the selection. Chained in this case.
// .next()
$("#vacations li").last().prev().next() //as above, but returning the next (one down) element. Which was our original element.
// .parent()
$("#vacations").parent() // selects the parent of the object. e.g. the tag under which that tag is nested
// .children()
$("#vacations").children() //selects all of the children of your element. Selects all children of those children as well
```

## Sinatra Snips:

#### Correct syntax to delete information from a session:
```ruby
session.delete(:user_id)
```

#### Adding a :user_id key to a session:
```ruby
created_user = User.new(params["user"])
  if created_user.save
    session[:user_id] = created_user.id
    redirect '/'
```

#### Making a "PUT" request in an erb form: 
```html
<form action="/someaction" method="POST">
  <input type="hidden" name="_method" value="put">
```
#### and similarly, a "DELETE" request:
```html
<form action="/someaction" method="POST">
  <input type="hidden" name="_method" value="delete">
```

#### helper methods
```ruby
helpers do
  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    return true if current_user
    false
  end
end
```


## BCrypt 

### User model:
```ruby

  def password
    @password ||= BCrypt::Password.new(hashword)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.hashword = @password
  end

```

### Authenticate method:
```ruby
  def authenticate(input_password)
  	self.password == input_password
  end
```

### Password custom validation
```ruby
  # add this validation to your User model:
  validate :has_password
  
  # add this to your password setter:
  @raw_password = new_password
  
  def has_password
    if @raw_password.nil? || @raw_password.empty?
      errors.add(:password, "is required")
    end
  end
```  

