#include <stdio.h>

void declarations() 
{
  // declaration and definition of variable a
  char a = 'a';

  // also declaration and definition. `b` will be allocated memory and given
  // a garbage value
  int b;

  // multiple d&d's on one line:
  float c, d, e;

  printf("our char variable a is: %c.\n our int variable b is %d\n", a, b);
}

int main(void) 
{
  declarations(); 
}
