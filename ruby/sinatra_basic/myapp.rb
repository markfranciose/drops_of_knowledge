require 'sinatra'

get '/' do
	@test = "Test"
	erb :cool
end
