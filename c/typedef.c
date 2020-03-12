#include <stdio.h>

/* the typedef keyword:
    assign an alternative name to existing types */


void typedefVersion()
{
  typedef struct {
    int a;
    int b;
    int c;
  } DEFFER;

  DEFFER d;
  
}

void typedefEquivalent() 
{
  typedef struct NODEFF {
    int a;
    int b;
    int c;
  };

  struct NODEFF d;
}

int main(void)
{
  
}
