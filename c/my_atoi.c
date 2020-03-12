#include <stdio.h>

int my_atoi( char* str )
{
  int res = 0;

  for (int i = 0; str[i] != '\0'; i ++) 
  {
    res = res * 10 + str[i] - '0';
  }

  return res;
}

void main ()
{
  char str[] = "1234";
  int val = my_atoi(str);
  printf("%d\n", val);
}

