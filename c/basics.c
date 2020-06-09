#include <stdio.h>

void noValue() {
  printf("I'm a side effect??\n");
}

int square(int x)  
{
  return x * x;
}

void main() {
  // printf print format string
  printf("Hello World\n");

  // for loop to print 10 times.
  int i;
  for (i = 0; i < 10; i++) {
    printf("Hello World\n");
  }

  // a procedure / function that doesn't return a value
  noValue(); 

  // function that returns an int
  int integer;
  integer = square(2);
  printf("%d\n", integer);

  // 2d point data structure
  typedef struct {
    double x;
    double y;
  } Point;
  
  Point p;

  // Do something with each item x of an array-like collection items, regardless indexes.
  int numbers[] = {1,2,3,4};
  int numbers_length = sizeof numbers / sizeof numbers[0];
  for ( int i = 0; i < numbers_length; i++ ) {
    printf("number is %d\n", numbers[i]);
  }

  // how many bytes is an int?
  int intSize = sizeof 1;
  printf("%d\n", intSize);

  
  
}



