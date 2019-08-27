#include <stdio.h>

int main()
{
	int w, c;
	while ((c = getchar()) != EOF) 
	{
		if (c == '\n' || c == ' ' || c == '\t')
		{
			++w;
		}
		printf("%d\n", w);
	}
}
