// When there can only be one instance of something you define it with the
// 'object' keyword. 

object TrueRing {
  def rule = println("To rule them all")
}

// 'object' works like another 'class' definition, but it creates a singleton
// object. In Scala, you can have both an 'object' and a 'class' definition
// with the same name. With this you can create class methods on the singleton
// object declaration and instance methods within the class declaration. 5 above
// is a class method. this strategy is called 'companion objects' 




