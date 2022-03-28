#include <stdio.h>

int main(void) {
	int *p; // variable p is a pointer to an int
	int i;  // variable i is an integer value
  // we can access the memory address of i with: &i (ampersand unary operator)
	i = 10; 
	p = &i;

  // Two different ways of printing the memory address of i
  printf("The address in memory of i is: %p\n", &i);
	printf("The address in memory of i is: %p\n", (void *) p);
	printf("The size of pointer p is %lu\n", sizeof(p));
	printf("The size of variablei is %d\n",sizeof(i));
	printf("The size of the value to which p points is %lu\n", sizeof(*p));

	int v = *p; // integer v is assigned to the integer value to which p is pointing;
	printf("The value of p is: %d\n", v);
  p++;
	printf("The value of p is: %d\n", *p);
	printf("The value of p is: %d\n", v);
  p--;
	printf("The value of p is: %d\n", *p);

	int k[3];
  k[0] = 1;
  k[1] = 2;
  k[2] = 3;
	int s = *k;
	printf("The value of s is: %d\n", s);
  s++;
	printf("The value of s is: %d\n", s);
  s++;
	printf("The value of s is: %d\n", s);
  s++;
	printf("The value of s is: %d\n", s);
  s++;
  s++;
  s++;
  s++;
  s++;
	printf("The value of s is: %d\n", s);

}

