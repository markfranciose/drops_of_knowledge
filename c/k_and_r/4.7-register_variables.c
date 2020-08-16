/* The register declaration advises the compiler that the variable will be
 * heavily used. Ideally, they are placed in machine registers. Compilers
 * can choose to ignore this */

/* Register variables aren't much used */

#include <stdio.h>

void func(register unsigned m, register long n);

int main(int argc, char *argv[])
{
	register int i;
	
	return 0;
}

void func(register unsigned m, register long n)
{
	// this all compiles
}
