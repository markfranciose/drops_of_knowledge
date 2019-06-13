/* 
    @description: Simple program to add two numbers
      using to show compilation steps.
    @author: Mark Franciose <mark.franciose@gmail.com>
*/

#include <stdio.h>
#define add(a, b) (a + b)

int main(void) 
{
  int x = 1, y = 2;
  printf("%d\n", add(x, y));
  return 0;
}
