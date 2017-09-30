require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("http://localhost:3000")

header = {'Content-Type': 'text/json'}

user = {user: {
								name: "Mark Franciose",
								email: "mark.franciose@gmail.com"
							}
				}

# Create the HTTP objectss
http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri, header)
request.body = user.to_json

# Send the request
response = http.request(request)


