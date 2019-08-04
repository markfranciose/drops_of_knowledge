#include <stdio.h>

void printSingleChar();

int main(void)
{
	printSingleChar();
	return 0;
}

void printSingleChar() 
{
	char c;

	printf("Enter character: ");
	c = getchar(); // returns the character read as an unsigned char cast to an int or EOF on end of file or error.

	printf("Character Entered (putchar): \n");
	putchar(c);

	printf("Character Entered (printf -d): %d", c);

}

