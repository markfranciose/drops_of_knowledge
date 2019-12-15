/*
 * Binary Search : Find index of int x in int v[], print to stdout,
 *	print -1 if x is not in v[]
 *	int v[] must be sorted
 */

#include <stdio.h>

/*
 * split v[] into 2 parts, check whether x is greater, or less than 
 * middle element. If greater, new arr is middle + 1 ... end. If less,
 * new arr is start... middle + 1. If neither are true... found our item
 */
int binsearch(int x, int v[], int n)
{
	int low, high, mid;
	low = 0;
	high = n - 1;

	while (low <= high)
	{
		mid = (low + high) / 2;
		if ( x < v[mid]) 
		{
			high = mid - 1;	
		}
		else if (x > v[mid])
		{
			low = mid + 1;
		}
		else 
		{
			return mid;
		}
	}
	return -1;
}

int main()
{
	int n, l, r;

  int h[12] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13};
	n = -2;
	l = 11;
	r = binsearch(n, h, l);

	printf("%d\n", r);

	return 0;
}
