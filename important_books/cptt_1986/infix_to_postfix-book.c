#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
int lookahead;

main() 
{
  lookahead = getchar();
  expr();
  putchar('\n');
}

expr()
{
  term();
  while(1)
    if ( lookahead == '+') {
      match('+');
      term();
      putchar('+');
    }
    else if ( lookahead == '-') {
      match('-');
      term();
      putchar('-');
    }
    else break;
}

term()
{
  if (isdigit(lookahead)) {
    putchar(lookahead);
    match(lookahead);
  }
  else exit(1);
}

match(t)
  int t;
{
  if (lookahead == t) lookahead = getchar();
  else exit(1);
}

