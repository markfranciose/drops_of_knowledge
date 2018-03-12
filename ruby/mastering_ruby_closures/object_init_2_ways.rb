=begin

We want an implementation like this:

client = Twitter::REST::Client.new( { consumer_key: 1234 } ) do
  consumer_secret     = 123456
  access_token        = 123456
  access_token_secret = 123445
end

=end

module Twitter
  module REST
    class Client
      attr_accessor :consumer_key, :consumer_secret, :access_token, :access_token_secret 

      def initialize(options = {}) &block
        options.each { |k,v| send("#{k}=", v) } # the reason we need the = sign after send
        # is that without it, ruby will evaluate as a getter method, because we're going 
        # to use attr_accessor. 
        puts &block
        instance_exec(&block) if block_given?
      end
    end
  end
end




p client.consumer_key
p client.consumer_secret
p client.access_token 
