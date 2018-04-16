# #access the index in a for loop

dogs = [
    "huey",
    "duey",
    "louis"
]

for id, dog in enumerate(dogs):
    print(id, dog)


# replace 'None' values in a list

dogs = [
    "prince",
    "princess",
    "duchess",
    None, 
    "da_king"
]

print(dogs)

dogs = [ 'Blank Dog' if dog is None else dog for dog in dogs ]

print(dogs)
