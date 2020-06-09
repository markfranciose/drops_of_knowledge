/* @description: small program to demonstrate lexical scope in c
   @author: Mark Franciose <mark.franciose@gmail.com> 
*/

#include <stdio.h>

int v = 0;

int w()
{
  return v;
}

int x() 
{
  int v = 10;
  return w();
}

int main()
{
  printf("%d\n", x());
  return 0;
}

