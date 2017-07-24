# cheat_sheet_of_cheat_sheets
a cheat_sheet of cheat_sheets

## ReST ReSOURCES

- [RESTular](http://www.restular.com/)

# SNIPPETS!

## Sinatra Snips:
Correct syntax to delete information from a session:
```ruby
session.delete(:user_id)
```

Adding a :user_id key to a session:
```ruby
created_user = User.new(params["user"])
  if created_user.save
    session[:user_id] = created_user.id
    redirect '/'
```
