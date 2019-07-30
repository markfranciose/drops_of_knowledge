#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>

char* cool(size_t a)
{
	int square;
	square = (a + 1) * a;
	char *b;
	int i;
	for (i = 0; i < square; i++ )
	{
		if ( i == (square - 1)) 
		{
			b[i] = '\0';
		}
		else if ( i >= a && (((i +1) % (a +1) == 0)))
		{
			//printf("newline %d\n", i);
			b[i] = '\n';
		}
		else {
			b[i] = '+';
		}
	}
	return b;
}

int main(int argc, char *argv[])
{
	
	cool(10);
	cool(2);
	cool(1);
	return 0;
}




/*
 * at index 10, newline char
 * at index 21, newline char
 * at index 32, newline char
 * 43, newline 
 * if a + 1 * a '/0'
 * elseif a */
