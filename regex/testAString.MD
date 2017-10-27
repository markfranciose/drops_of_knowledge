in JS:

```javascript
// regexObject.test(str);

let string = "This dog has stolen my necktie!";
let doIhaveANecktie = /stolen/.test(string); // returns true

// of course, can use much more complecated regexes
```

in Ruby:

```ruby
# in Ruby 2.4.0 RegExp#match? exists:
/dog/.match?("What a good dog!") # true

# quick double bang version for pre 2.4 Ruby:
!!(/dog/ =~ "I'm so glad the dog got a new lawnmower.")

# Without doing my own benchmarking, folks say they're equivalent enough speed

```
