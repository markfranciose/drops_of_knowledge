# pull the first k,v pair from a hash 

dog_nicknames = {
	nike: "Man-Dog",
	benson: "His Highness",
	roy: "Roy dog"
}

first_dog_key, first_dog_value = dog_nicknames.first
puts first_dog_key
puts first_dog_value

# why this happens
# Hash.first (from Enumerables) returns an array
first_dog = dog_nicknames.first
print first_dog


# this prints a 2-d array:
first_two_dogs = dog_nicknames.first(2)
print first_two_dogs
