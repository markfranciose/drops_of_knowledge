/* From the C11 standard:
    The function called at program stratup is named main. The implementaiton
    declares no prototype for this function. It shall be defined with a return 
    type of int and with no parameters, or with two parameters (argv example), 
    or in some other implementation-defined manner.
*/

#include <stdio.h>

int main(void)
{
  printf("Hello World!\n");
  return 0;
}

/* The code below is compiler dependent */
/*
void main() {}
*/

/* 
    An implementation can take the last 'or' in the standard to allow other
    returns for main 
*/





