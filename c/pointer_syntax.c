#include <stdio.h>

int main(void) {
	int* p; // variable p is a pointer to an int
	int i;  // variable i is an integer value
	i = 10;
	p = &i;

	printf("The address in memory of i is: %p\n", (void *) p);
	printf("The size of pointer p is %lu\n", sizeof(p));
	printf("The size of variablei is %d\n",sizeof(i));
	printf("The size of the value to which p points is %lu\n", sizeof(*p));

	int v = *p; // integer v is assigned to the integer value to which p is pointing;
	printf("The value of p is: %d\n", v);

	int k[3];
	int s = *k;

}

