#include <math.h>
#include <stdio.h>

const int MAX = 3;

// "return" multiple values;
void multiple_values(int n, int* square, double* square_root)
{
  *square = n * n; 
  *square_root = sqrt(n);
}

void run_multiple_values() 
{
  int n = 100;
  int sq;
  double square_root;
  multiple_values(n, &sq, &square_root);
  
  printf("%d %f\n", sq, square_root);
}

int increment() {
  int var[] = {10, 100, 200};
  int* ptr;

  ptr = var;

  for ( int i = 0; i < MAX; i++ )
  {
    printf("Address of var[%d] = %x\n", i, ptr );
    printf("Value of var[%d] = %d\n", i, *ptr);

    ptr++;
  }

  return 0;
}

// Using pointers allows one function to modify variables in another;

void swap(int* x, int* y)
{
  int temp = *x;
  *x = *y;
  *y = temp;
}

void swap_example()
{
  int x = 5;
  int y = 10;
  printf("Initial x is %d. Initial y is %d\n", x, y);
  swap(&x, &y);
  printf("Now x is %d. Now y is %d\n", x, y);
}

void main() {
  // BASICS // 

  // increment();
  // swap_example();
  run_multiple_values();
  

  // variable declaration && assignment
  int a = 0;
  int b = 2;
  float c = 3.43;

  // pointer declaration && assignment
  int* p1 = &a;
  int* p2 = &b;

  // will print the location in memory of a.
  printf("Address of p1: %x\n", p1);
  // will print the value of a
  printf("Value of p1: %d\n", *p1);

  // will add the values at those addresses
  int p1plusp2 = *p1 + *p2;
  printf("%d\n", p1plusp2);
  
}

