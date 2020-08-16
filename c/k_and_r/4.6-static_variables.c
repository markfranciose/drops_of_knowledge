#include <stdio.h>

/* The static declaration, applied to an external variable or function
   limits the scope of that object to the rest of the source file 
   being compiled */

void usestatic();
void statictwo();
void internalstatic();

#define BUFFSIZE 1024

static char buff[BUFFSIZE];
static int  bufp = 0;

int main(void)
{
	usestatic();
	statictwo();
	/* prints mmmmmmmmmmnnnnnnnnnn */

	internalstatic();
	internalstatic();
	/* prints 10\n20\n */

	return 0;
}

void usestatic()
{
	for (; bufp < 10; bufp++)
	{
		buff[bufp] = 'm';
	}
}

void statictwo()
{
	for (; bufp < 20; bufp++)
	{
		buff[bufp] = 'n';
	}
	buff[bufp] = '\0';

 printf("%s\n", buff);
}

void internalstatic()
{
	static int counter;
	counter += 10;
	printf("%d\n", counter);
}

