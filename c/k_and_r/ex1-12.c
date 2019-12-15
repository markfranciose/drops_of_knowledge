/* Write a program that prints it's input one word per line */

/* start with a buffer in which to copy the string, 
 * read each char. For every block of whitespace, replace with a linebreak
 * . 
 *
 * If char is whitespace 
 *		-- skip chars until non whitespace 
 *		-- add a newline.
 *
 */

#include <stdio.h>
#include <ctype.h>

int main(void)
{
	int c, i, w;
	char buffer[1024];

	i = 0; // index on buffer
	w = 0; // whether or not we're in a whitespace block

	while ( (c = getchar()) != EOF ) 
	{
		if ( isspace(c) ) 
		{
			w = 1; // flag in whitespace 
		}
		else 
		{
			if ( w ) // coming in from a whitespace block
			{
				buffer[i++] = '\n';
				w = 0;
			}
			buffer[i++] = c;
		}
	}
	buffer[i] = '\0';
	printf("%s\n", buffer);

	return 0;
}
