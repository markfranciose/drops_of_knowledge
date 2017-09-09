class Rectangle
  attr_reader :width, :height

  def initialize(args = { })
    @width  = args.fetch(:width, 1)
    @height = args.fetch(:height, 1)
  end

  def area
    width * height
  end

  def perimeter
    (height * 2) + (width * 2)
  end

  def diagonal
    Math.sqrt((height^2) + (width^2))
  end

  def is_square?
    return true if rectangle.height == rectangle.width
  	  false
  end

end

rectangle_one = Rectangle.new(height: 4, width: 5)

puts rectangle_one.area
puts rectangle_one.perimeter
puts rectangle_one.diagonal
puts rectangle_one.is_square?
