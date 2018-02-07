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
