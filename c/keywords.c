#include <stdio.h>

// declare and initialize an extern variable
extern int a = 1;

// declaring and initializing a global variable
// if not assigned the 2, it would have been default value 0
int b = 2;

// typedef is an alias
typedef long long int LL;

/* function that prints an int's square. Accepts one argument and returns
   the `void` data type. */
void square(int arg) 
{
  printf("the square of %d is %d\n", arg, arg * arg);
}

int main(void) 
{
  // a constant variable, it cannot be modified.
  const int c = 0;
  // consts must be explicitly defined. below is invalid:
  //error const int d;

  char e = 'E';

  // telling compiler that a is an external cariable, defined elsewhere.
  extern int b;

  // using our typedef to assign a long long int to f
  LL f = 100000;

  
  // modifying extern variables
  printf("extern variables %d && %d\n", a, b);
  a = 10;
  b = 11;
  printf("modified extern variables %d && %d\n", a, b);


  // static example: 
  int counter = 3;
  while ( counter > 0)
  {
    static int g = 10;
    g++;
    printf("The value of g is %d\n", g);
    counter--;
  }
  /* the value of g does not get re-initialized after the first iteration.
     compare to below: */

  while ( counter > -3 ) 
  {
    int h = 10;
    h++;
    printf("The value of h is %d\n", h);
    counter--;
  }

  square(10);

  return 0;

}
  

