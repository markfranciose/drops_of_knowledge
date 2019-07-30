#include <stdio.h>
#define MAXLINE 1000 // max input line length

int getline2(char line[], int max);
int strindex(char source[], char search[]);
char pattern[] = "cool"; // patern for which we're searching

/*
 *  Find all lines matching a certain pattern
 */

int main(void)
{
	char line[MAXLINE];
	int found = 0;

	// read lines
	// // if has char, print it
	while (getline2(line, MAXLINE) > 0)
	{
		if (strindex(line, pattern) >= 0) 
		{
			printf("%s", line);
			found++;
		}
	}
	/*
	char test1[] = "markiscool";
	char test2[] = "cool";
	int a = strindex(test2, test1);
	printf("%d", a);
	printf("aaa");
	*/
	return found;
}

/* feeds a line into s, returns length of string */
int getline2(char s[], int lim)
{
	int c, i;	
	i = 0;

	while (--lim > 0 && (c = getchar()) != EOF && c != '\n') 
	{
		s[i++] = c;
	}
	if ( c == '\n') 
	{
		s[i++] = c;
	}
	s[i] = '\0';
	return i;
}

int strindex(char s[], char t[])
{
	int i, j, k;

	for (i = 0; s[i] != '\0'; i++)
	{
		for (j = i, k = 0; t[k] != '\0' && s[j] == t[k]; j++, k++)
		{
			;
		}
		if (k > 0 && t[k] == '\0') {
			return i;
		}
	}
	return -1;
}
