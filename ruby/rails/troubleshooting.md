Error message: ```cannot load such file -- bcrypt_ext (LoadError)```
solution:
in Gemfile:
```
gem 'bcrypt', git: 'https://github.com/codahale/bcrypt-ruby.git', :require => 'bcrypt'
```

