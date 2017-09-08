# this works, but has the argument order dependency problem
class Rectangle:
  def __init__(self, width, height):
    self.height = height
    self.width = width

  def area(self):
    return self.height * self.width

  def perimeter(self):
    return (2 * self.height) + (2 * self.width)

x = Rectangle(4, 4)
print(x.width)
print(x.area())
print(x.perimeter())

