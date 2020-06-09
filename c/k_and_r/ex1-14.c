/* Write a program to print a histogram of the frequencies of different
 * characters in its input */

#include <stdio.h>

int main(void)
{
	int chars[128];
	int c;
	int charfill;
  int i;

	/* array of 128 0s, to count occurance of each char */
	for ( charfill = 0; charfill < 127; charfill++)
	{
		chars[charfill] = 0;
	}

	while ((c = getchar()) != EOF) 
	{
    chars[c]++;
	}

	printf("\n");
	for ( i = 0; i < 128; i++)
	{
		if (chars[i])
		{
			printf("%c: ", i);
			while (chars[i]) 
			{
				printf("|");
				chars[i]--;
			}
			printf("\n");
		}
	}

	return 0;
}


