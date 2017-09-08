class Rectangle
  attr_reader :width, :height

  def initialize(args = { })
    @width  = args.fetch(:width, 1)
    @height = args.fetch(:height, 1)
  end
end

rectangle_one = Rectangle.new(width: 4, height: 4)

def area(rectangle)
  rectangle.width * rectangle.height
end

puts area(rectangle_one)

def perimeter(rectangle)
  (rectangle.height * 2) + (rectangle.width * 2)
end

def diagonal(rectangle)
  Math.sqrt((rectangle.height^2) + (rectangle.width^2))
end

def is_square(rectangle)
  return true if rectangle.height == rectangle.width
  false
end

puts perimeter(rectangle_one)
puts diagonal(rectangle_one)
puts is_square(rectangle_one)
