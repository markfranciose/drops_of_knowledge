/* Verify that the expression getchar() != EOF is 0 or 1 */

#include <stdio.h>

int main(void)
{
	int e;
	e = getchar() != EOF;
	printf("%d\n", e);
}
