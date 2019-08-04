/* Write a program to print a histogram of the lengths of words in its input */

#include <stdio.h>
#include <ctype.h>

#define MAXLENGTH 20

int main(void)
{
	int c, w; // getchar
	int l = 0; // length of word
	int i; // for loop counter to print
	int wordlen[MAXLENGTH]; //array to hold occurance of each # of letters per word

	// format wordlen to 0s
	for (w = 0; w < MAXLENGTH; w++)
	{
		wordlen[w] = 0;
	}

	while ( (c = getchar()) != EOF ) 
	{
		if ( isspace(c) ) 
		{
			if ( l > 0 ) 
			{
				wordlen[l]++;
			}
			l = 0;
		}
		else 
		{
			l++;
		}
	}
			// handle the case where the last char isn't a whitespace, but EOF
			if ( l > 0 ) 
			{
				wordlen[l]++;
			}

	for (i = 1; i < MAXLENGTH; i++)
	{
		printf("words %d length: %d\n", i, wordlen[i]);
	}
}
