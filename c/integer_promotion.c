#include <stdio.h>

int main(void)
{
	char a = 30, b = 40, c = 10;
	char d = ( a * b ) / c;
	printf("%d\n", d);
	return 0;
}

/* we should expect the code above to produce an arithmetic overflow
because a signed char value must be between -128 and 127. However, 
because of integer promotion when performing the arithmetic operation
a and b are promoted to int, and able to complete the operation. */
