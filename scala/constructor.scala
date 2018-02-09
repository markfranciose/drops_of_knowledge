class Person(first_name: String) {
  println("This is the outer constructor")

  def this(first_name: String, last_name: String) {
    this(first_name)
    println("This is the inner constructor")
  }

  def talk() = println("Hi")
}

val bob = new Person("Bob")
val bobTate = new Person("Bob", "Tate")

// This class has a constructor with one parameter, firstName and a method 'talk'
// The 'this' method is a second constructor. On 5 invokes 'this' with the primary
// constructor with only the firstName parameter. 

// 12 & 13 instantiate a Person in two different ways. 12 with the primary
// constructor and 13 with the auxiliary constructor.


