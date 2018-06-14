module DogApp
	class Application < Rails::Application
		# ... things are configured

		config.middleware.insert_before 0, Rack::Cors do
			allow do
				origins '*'
				resource '*', headers: :any, methods: [:get, :post, :options]
			end
		end

	end
end
