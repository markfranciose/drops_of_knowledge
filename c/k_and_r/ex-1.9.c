#include <stdio.h>

int main(void)
{
	char buffer[1024];
	int c, p, i;
	i = 0;

	while ((c = getchar()) != EOF)
	{
		p = buffer[i - 1];
		if (c == ' ' && p == ' ')
		{
		}
		else {
			buffer[i] = c;
			i++;
		}
	}
	buffer[i] = '\0';

	printf("%s", buffer);
	return 0;
}
