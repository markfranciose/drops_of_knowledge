# parameters are forbidden to be used in mass assignment until they
# have been whitelisted.

class DogController < ActionController::Base
	# This will raise an ActiveModel::ForbiddenAttributesError exception
	# because its using mass assigning without an explicit permission step
	def create
		Dog.create(params[:dog])
	end

	# This will pass as long as there is a 'dog' key in the params. Else
	# it will raise ActionController::ParameterMissing exception, gets
	# picked up by ActionController::Base and turned into a 400
	def update
		dog = Dog.find params[:id] 
		dog.update!(dog_params)
		redirect_to dog
	end

	private
	# Using a private method to encapsulate permitted params is a good
	# pattern because you'll be able to reuse the list.
	def dog_params
		params.require(:dog).permit(:name, :tricks)
	end
end

# Some examples:

params.permit(:id)

# the key :id will pass the whitelisting if it appeas in params and has a
# permitted scalar value. classes allowed:
# - String
# - Symbol
# - NilClass
# - Numeric
# - TrueClass
# - FalseClass
# - Date
# - Time
# - DateTime
# - StringIO
# - IO
# - ActionDispatch::Http::UploadedFile
# - Rack::Test::UploadedFile

# To declare that the value in params must be an array of permitted
# scalar values, map the key to an empty array:

params.permit(id: [])

# Allow any permitted scalar value within the hash:

params.permit(perferences: {})

# Allow any values in hash or sub-hash:

params.require(:anything_goes).permit!

# Nesting params

params.permit(:name, { emails: [] }, friends: [:name, hobbies: []] )
# and so on...


