# cheat_sheet_of_cheat_sheets

## What is the Point?
The point of this repo is two-fold:
1. To put the resources that I use in one easy to find place.
2. To stay sharp on technologies that I've used

## Big List of Resources

## Big List of Topics


### General

#### Regex

### Git
- [Great general Git reference](https://github.com/ArslanBilal/Git-Cheat-Sheet)

### Ruby

#### Style
- [AirBnB Style Guide:](https://github.com/airbnb/ruby) Style guide of record, AFAIK
-

#### Rspec


## My Code Examples

### OOJS Code Examples
- [bikes and stations:](https://github.com/chi-fiery-skippers-2017/oojs-bikes-and-stations-challenge/tree/solo-markfranciose) OOJS using constructor functions
- [gardens:](https://github.com/chi-fiery-skippers-2017/oojs-garden-challenge/blob/pair-markfranciose%2Crrpatel25/src/garden.js) OOJS using object literal notation

## Active Record Resources
- [migrations](http://guides.rubyonrails.org/active_record_migrations.html)
- [validations](http://guides.rubyonrails.org/active_record_validations.html)
- [associations](http://guides.rubyonrails.org/association_basics.html)

## JS Resources
- [JS basics challenge](https://github.com/chi-fiery-skippers-2017/javascript-from-ruby-challenge)
- [MDN JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN JS Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [jshint](http://jshint.com/) helpful for debugging JS code.

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
#### Error handling in create

```ruby
post /contacts do
  @contact = Contact.new(params[:contact])
  if @contact.save
    redirect '/contacts'
  else
    status 422 # alerts browser that there is an input error.
    @errors = @contact.errors.full_messages # or whatever format you use in your views to show errors
    erb :'/contacts/new'
  end
end
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

  # Or:

  def logged_in?
    session[:user_id] != nil
  end

end
```


## BCrypt

### Steps to including BCrypt in your app
1. run a ```shell gem install bcrypt ```
2. add ```ruby gem 'bcrypt' ``` to your Gemfile
3. add ```ruby require 'bcrypt' ``` to /config/environment.rb
4. RESTART shotgun/sinatra

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

