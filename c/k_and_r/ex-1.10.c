#include <stdio.h>

int main(void)
{
	int c, i;	
	i = 0;
	char buffer[1024];
	while ((c = getchar()) != EOF)
	{
		if (c == '\t')
		{
			buffer[i++] = '\\';
			buffer[i++] = 't';
		}
		else if (c == ' ') 
		{
			buffer[i++] = '\\';
			buffer[i++] = 'b';
		}
		else if (c == '\\') 
		{
			buffer[i++] = '\\';
			buffer[i++] = '\\';
		}
		else 
		{
			buffer[i++] = c;
		}
	}
	buffer [i] = '\0';

	printf("%s", buffer);
	return 0;
}
