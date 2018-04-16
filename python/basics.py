# add key to dictionary
# same as ruby
dictionary = {"key": "value"}
print(dictionary)
dictionary["new_key"] = "new_value"
print(dictionary)

# dictionary to json:
import json

r = {"one": "uno", "two": "dos"}
# to string
r = json.dumps(r)
# from string to dict
r = json.loads(r)

# access value from a tuple:

tupley = (1,2,3)
print(tupley[1])

# add element to list
listy = [1,2,3]
listy.append(4)
print(listy)

# Common List Methods:
'''
list.append(elem) -- adds a single element to the end of the list. Common error: does not return the new list, just modifies the original.
list.insert(index, elem) -- inserts the element at the given index, shifting elements to the right.
list.extend(list2) adds the elements in list2 to the end of the list. Using + or += on a list is similar to using extend().
list.index(elem) -- searches for the given element from the start of the list and returns its index. Throws a ValueError if the element does not appear (use "in" to check without a ValueError).
list.remove(elem) -- searches for the first instance of the given element and removes it (throws ValueError if not present)
list.sort() -- sorts the list in place (does not return it). (The sorted() function shown below is preferred.)
list.reverse() -- reverses the list in place (does not return it)
list.pop(index) -- removes and returns the element at the given index. Returns the rightmost element if index is omitted (roughly the opposite of append()).
'''

