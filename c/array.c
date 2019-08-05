#include <stdio.h>

// an array is a collection of items stored at continuous memory locations
int main(int argc, char *argv[])
{
	int arr[3]; // declaring an array with 3 items;

	arr[0] = 1;
	arr[1] = 2;
	arr[2] = 3;

	printf("%d %d %d", arr[0], arr[1], arr[2]);
	return 0;
}
