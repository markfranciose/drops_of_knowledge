#include <stdio.h>

float fahrenheitToCelsius(int f);

int main(void)
{
	int i, s, step, limit;
	float cel;
	i    = 1;
	s    = 20;
	step = 20;

	printf("  F : C\n");
	printf("%3d : %3.1f\n", i, fahrenheitToCelsius(i));
	while ( s < 320 ) 
	{
		printf("%3d : %3.1f\n", s, fahrenheitToCelsius(s));
		s += step;
	}
}

float fahrenheitToCelsius(int f)
{
	return (f - 32) * (5.0 / 9.0);
}
