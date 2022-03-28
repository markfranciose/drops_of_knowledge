#include <stdio.h>

int fibo(int n)
{
  int mem[n + 2];
  mem[0] = 0;
  mem[1] = 1;

  for (int i = 2; i <= n; i++)
  {
    
  }
}

int main(int argc, char *argv[])
{
  //int fibo_number = fibo(9);
  //printf("%d", fibo_number);
  argv++;
  argv++;
  printf("%d", argc);
  printf("%c", argv[1]);

  return 0;
}
