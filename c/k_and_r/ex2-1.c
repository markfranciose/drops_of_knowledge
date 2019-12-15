/* write a program to determine the ranges of char, short, int, long variables. Both signed and unsigned. */

#include <stdio.h>

void unsignedchar(void);

int main(void)
{
	signed char c = 1;
	int max, min;

	while ( c > 0 ) c++;
	min = c;

	while ( c < 0 ) c--;
	max = c;

	printf("char max is %d, min is %d\n", max, min);
	unsignedchar();
	return 0;
}

void unsignedchar(void)
{
	unsigned char c = 1;
	int max, min;

	// for any unsigned, we know the min value is 0;
	min = 0;

	while ( c != 0 ) {
		max = c;
		c++;
	}

	printf("unsigned char max is %d, min is %d\n", max, min);
}
