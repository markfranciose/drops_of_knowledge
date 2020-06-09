/* Modify the temperature conversion program to print the table
 * in reverse order */

/* Using a for loop instead of a while, since that's the point of this
 * section. Set the test case to s > 0, otherwise use same structure
 *
 * Note: leaving this as converting C to F */

#include <stdio.h>

float fahrenheitToCelsius(int f);
float celsiusToFahrenheit(int c);

int main(void)
{
	int i, s, step, limit;
	float cel;
	i    = 1;  // 1 = special case we want to print
	step = 20; // decrease base temp in increments of 20

	printf("  C : F\n"); // header

  /* 300 - 20, in steps of 20 */
	for (s = 300; s > 0; s -= step)
	{
		printf("%3d : %3.1f\n", s, celsiusToFahrenheit(s));
	}
	/* special case on bottom now */
	printf("%3d : %3.1f\n", i, celsiusToFahrenheit(i));
}

float fahrenheitToCelsius(int f)
{
	return (f - 32) * (5.0 / 9.0);
}

float celsiusToFahrenheit(int c) 
{
	// with transitivity and order of operations this should work
  return c * 9 / 5 + 32;
}
