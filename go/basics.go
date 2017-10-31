package main // Every Go program is made of packages. Programs start running in package 'main'


import (
	"fmt"
	"math/rand"
) // This program is using the packages with import paths "fmt" and 'math/rand"

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}

// The code below groups the imports into a parenthesized, 'factored' import statement

// It is good style to use the factored import statement, rather than individual ones

package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Now you have %g problems.", math.Sqrt(7))
}

// When importing a package you can only refer to exporeted names (in caps). 'Unexported' names are not accessible from outside the package.

package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(math.Pi) // math.pi would throw an error...
}

// Functions can take zero or more args.
// example below - add takes two params of type int.
// the type comes after the variable name

package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}

// WHen two or more consecutive named function parameters share a type, you can
// omit the type from all but the last: 

package main

import "fmt"

func add(x, y int) in {
	return x + y
}

func main() {
	fmt.Println(add(100, 111))
}

// A function can return any number of results.
// The swap function below returns two strings

package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a,b := swap("hello", "world")
	fmt.Println(a,b)
}

// Return values may be named. If so, they are treated as vars defined @
// the top of the function
// The names should document the meaning of the return values.
// A return statement without arguments returns the named return values, 
// this is known as a "naked return"

// Naked returns should only be used in short functions. They can harm
// readability in larger functions.


package main

import "fmt"

funct split(sum, int) (x,y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}

// var statement declares a list of variables. the type is last.
// a var statement can be at a package or function level.

package main

import "fmt"

var c, python, java bool
// to declare the vars on one line, they must be of the same type.

func main() {
	var i int
	fmt.Println(i, c, python, java)
}

// if you declare the booleans vars and don't assign them anything, they
// return 'false'

// declaring an int w/o assigning a value returns '0'

// a var declaration can include initializers, one per var
// If an initializer is present, the type can be omitted, the variable will
// take the type of the initializer.

package main

import 'fmt'

var i, j int = 1, 2
// var i, j = 1, 2 <- This also works

func main() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}

// Short variable declarations
// Inside a function the := short assignment statement can be used in place of
// a var declatation with implicit type

// Outside of a function every statement begins with a keyword, no using :=

package main

import "fmt"

func main() {
	var i, j, int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}



