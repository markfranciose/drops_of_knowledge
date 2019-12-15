/* Write a program to print the corresponding C to F table */

/* add a different function to go from C to F && re-use the 
 * structure of the previous program*/
#include <stdio.h>

float fahrenheitToCelsius(int f);
float celsiusToFahrenheit(int c);

int main(void)
{
	int i, s, step, limit;
	float cel;
	i    = 1;  // 1 = special case we want to print
	s    = 20; // start at twenty
	step = 20; // increase base temp in increments of 20

	printf("  C : F\n"); // header
	printf("%3d : %3.1f\n", i, celsiusToFahrenheit(i));
	while ( s < 320 ) 
	{
		printf("%3d : %3.1f\n", s, celsiusToFahrenheit(s));
		s += step;
	}
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
