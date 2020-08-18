#include <stdio.h>

int fibo(int n)
{
  if ( n <= 1 )
  {
    return n;
  }
  else
  {
    return fibo(n - 1) + fibo(n - 2);
  }
}

int main(int argc, char *argv[])
{
  int fibo_number = fibo(9);
  printf("%d", fibo_number);

  return 0;
}
