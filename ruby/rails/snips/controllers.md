### skip an inherited callback
```ruby
class ApplicatioController
	before_action :muzzle_pup

	private

	def muzzle_pup
		"no good!"
	end
end

class Barker < ApplicatioController
	skip_before_action :muzzle_pup, only: [ :create, :index ]
end

```

### render
```ruby
#... class ClassController... 
	# json, w/ status
	render status: 200, json: @model_instance

	# plain text w/ no markup: 
	render plain: "I am just some text"

	# xml, w/ status
	render xml: @model_instance, status: 201

	# javascript, string with MIME type `text/javascript`
	render js: "alert('What is the meaning of this??');"

	# content_type will set the MIME type
	render file: filename, content_type: "application/pdf"

	# use a specific file for the layout
	render layout: "alternate_layout"

	# no layout at all:
	render layout: false

	# `status` accepts both numeric codes and symbols
	# TODO - Link this to the chart
	render status: 201
	render status: :created
#... end
```
