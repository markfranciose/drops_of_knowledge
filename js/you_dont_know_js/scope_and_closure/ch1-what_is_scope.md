Scope: the rules for storing variables in some location and for finding those 
variables later.

### Compiler Theory:
three stages:
  - tokenizing / lexing: breaking up a string of chars into meaningful (to
  the language) chunks. 
  ```
  var dog = 2;
  ```
  The compiler would likely break this up into _var, dog, =, 2, ;_ Whitespace 
  may be grabbed depending on its use in the language.

  - parsing: taking a stream of tokens and turning it into a tree of nested 
  elements, which are the grammatical structure of the program. 
  (AST - Abstract Syntax Tree)
  above example something like: 
  ```
  VariableDeclaration
    -> Identifier (a)
    -> Assignment Expression
       -> NumericLiteral(2)
  ```
  - code-generation: Taking the AST and turning it into executable code. Lots
  of detail, but broadly take the AST above and turn it into machine instruct-
  ions to create a variable a (reserviing memory...etc) and storing a value.

much more complexity in how each of these are implemented, but these are broad
strokes.

the JS engines don't have much time to optimize, becuase the build step 
doesn't happen far ahead of execution. Lots of tricks (JIT compilation..etc)

Overall, the JS engine must compile code right before its execution.

### Understanding Scope

characters: 
engine: start to finish compilation and execution
compiler: does parsing and code generation
scope: mantains lookup buckets.
example:
```
var a = 2;
```
engine sees this as 2 things, 1 handled by compiler, 1 by engine @ runtime.
one might think compiler will do the following @ code generation _allocate mem
, call it a, assign 2 to variable_ - not quite.

compiler: 1 - seeing var a, compiler asks scope to see if a var a exists. If
so, moves on. if not, compiler asks scope to declare a new var a for its scope
collection.
          2 - compiler produces code for engine to execute to handle a = 2
assignment. Engine asks scope if there is an a in the current scope, if so
engine uses that var. if not, it looks elsewhere. (nested scope)

If engine finds variable, assigns the value 2 to it, if not, it raises an error

two actions
  1 - compiler declares a var (if not previosuly declared in current scope)
  2 - @ execution, engine looks up the variable amd assigns to it, if found.

  #### Compiler Speak

  Engine performs different types of lookup. 

  LHS vs. RHS
  Left hand side vs. right hand side of _an assignment operator_

  For now, an RHS lookup is the same from a lookup of the value of some var
  LHS tries to find the var container itself, so that it can assign.
  RHS really means "anything not LHS"

  ```javascript
    console.log(a);
  ```
  The reference to a is an RHS refnerence, because nothing is being assigned
  to a. Instead... looking up the value of a, so that it can pass to c.log()

  ```javascript
    a = 2;
  ```

  The reference to a is an LHS, because we don't care about the value, we 
  want to find the variable as a target for the = 2 assignment operator.

  LHS - who is the target
  RHS - who is the source of the assigment.(We're using it need to know what
  it is.

  example:
  ```javascript
    function foo(a) {
      console.log(a); //2
    }

    foo(2);
  ```
  line 97 RHS reference to foo - go back and look up value of foo. parens
  means the value of foo should be executed, so it needs to be a function.

  subtle assignment, implied ```a = 2``` When value 2 is passed as an arg to
  foo(..), 2 value is assigned to the parameter a. To implicitly assign to
  a parameter an LHS lookup is performed.

  line 94 refernce to the value of a (RHS), that value is passed to con.log
  con.log needs a reference to execute, does RHS lookup for console, then
  property-resolution for a method called log.

  *end para* a function declaration is not an LHS lookup assignment in the
  way we're discussing here.
  (most naive way that ther's no equal, so must be an RHS.. need more here)

  ```javascript
    function foo(a) {
      console.log(a); //2
    }

    foo(2);
  ```

  conversation: 
  engine: scope, i have an RHS reference for foo. Heard of it?
  scope: yes, compiler declared it. It's a function, here.
  engine: ok, executing foo.
  engine: I have an LHS reference for a, heard of it?
  scope: yes, compiler declared it as a formal parameter to foo. here it is
  engine: now I'm going to assign 2 to a
  engine Need an RHS for console.
  scope: Yes, its a built in. Here.
  engine: Ok, looking up log(..) its a function.
  engine: have an RHS for a
  scope: same as before.
  engine: passing the value of a, which is 2, into log(..)

  Quiz:
  ```javascript
  function foo(a) {
    var b = a;
    return a + b;
  }

  var c = foo(2);
  ```

  all LHS:
- last line c (since its the engine, last line actually executes first)
- 1st line a
- 2nd line b

all RHS
- = foo(2)
- = a
- a +
- + b 
