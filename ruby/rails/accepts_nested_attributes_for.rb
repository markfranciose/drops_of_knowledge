# By default nested attribute updating is disabled.  
# enable with accepts_nested_attributes_for
# an attr writer is defined on the model

class DogBook < ActiveRecord::Base
	has_one :dog_topic, class_name: "Dog", foreign_key: "dog_id"
	has_many :pages
	
	accepts_nested_attributes_for :dog_topic, :pages
end

# a_n_a_f adds
dog_topic_attribues=(attributes)
# and
pages_attributes=(attributes)

# by default :autosave is enabled

# One-to-one

# A member model with one Avatar

class Member < ActiveRecord::Base
	has_one :avatar
	accepts_nested_attributes_for :avatar
end

# Enabling nested attrs on a 1-1 allows you to create the two together

params = {member: { name: "Mark", avatar_attributes: { pic: "cool.jpg" } } }
member = Member.create(params[:member])
# would allow us these:
member.avatar.id # => next id
member.avatar.pic # => "cool.jpg"

# The avatar can also be updated through the member:

params = { member: { avatar_attributes: { id: 2, pic: "sweet.jpg" } } }
member.update params[:member]
member.avatar.pic # => "sweet.jpg"

# To allow the nested model to be destroyed:

class Member < ActiveRecord::Base
	has_one :avatar
	accepts_nested_attributes_for :avatar, allow_destroy: true
end

# and to destroy:

member.avatar_attributes = { id: 2, _destroy: true}
member.avatar.save
member.reload.avatar # => nil

# must add the id of the model, and the _destroy key with a truthy value
# the parent model must be saved


