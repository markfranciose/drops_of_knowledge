=begin 

In rails config/routes.rb looked like this:

routes = Router.new do |r|
  r.match '/about' => 'home#about'
  r.match '/users' => 'users#index'
end

later it looked like this:

routes = Router.new do
  match '/about' => 'home#about'
  match '/users' => 'users#index'
end

In the syntax above the block no longer expects an argument. With nothing be passed into yield
to which object does match() belong? 
=end

class Router

  def initialize
    yield self
  end

  def match(route_hash)
    puts route_hash
  end
end

# first, do an implementation for this:
# type one
routes = Router.new do |r|
  r.match '/about' => 'home#about'
  r.match '/users' => 'users#index'
end



# How to do type 2?
=begin
instance_eval() 

When a method is called without a reciever, it is assumed that the reciever
is 'self'. 
In the top level self is the 'main' object
So, when you would call type 2 normally it would say that self does not
have a main() method.

So, rather than calling match on main, we want to call it on the Router instance

Block-to-Proc

when ruby sees '&block' it converts the block into a Proc object. 
1. Block --> Proc if &block is in a method argument
2. Proc --> Block if &block is in a method body


=end


class Router

  def initialize(&block) # code makes explicit that the block should be captured in &block
    instance_eval &block # that block needs to be passed into instance_eval()
  end

  def match(route)
    puts route
  end


end

# type 2
routes = Router.new do
  match '/about' => 'home#about'
  match '/users' => 'users#index'
end

