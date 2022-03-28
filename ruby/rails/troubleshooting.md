Error message: ```cannot load such file -- bcrypt_ext (LoadError)```
solution:
in Gemfile:
```
gem 'bcrypt', git: 'https://github.com/codahale/bcrypt-ruby.git', :require => 'bcrypt'
```

problem: rails/etc. throws an error about an incompatible version of bcrypt

solution 1: 

```shell
gem uninstall bcrypt
# gem list to find any other names that might be used 
# there may be a list of options, if so select option 3 or: 
gem uninstall bcrypt-ruby

# re-install bcrypt
gem install bcrypt --platform=ruby 
```

add the following line to the Gemfile:

```ruby
gem 'bcrypt', platforms: :ruby
```


Error message ```ActionController::RoutingError (No route matches [OPTIONS]```
problem: rails doesn't process OPTIONS requests. install rack-cors gem


Problem: 'webpacker and/or asset pipeline fails to compile'
solution:   `webpack_compile_output: true` in config/webpacker.yml

