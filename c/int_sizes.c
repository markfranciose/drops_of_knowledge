/* `int` keyword:
    (compiler dependent ?) what does the standard say
    can be pretty sure that the size is 4 bytes.
*/
#include <stdio.h>

void print_int_size(void)  
{
  int int_size;
  int_size = sizeof(int);
  printf("The size of an int is %d bytes\n", int_size);
}

/* Signing 
   signing refers to whether space is allocated for a negative sign in the 
   memory location for the int type. With a 4 byte / 32 bit int, one bit is
   reserved for the sign and 31 are for the values.
   `unsigned` types don't include that (possible) negative sign, and thus can
   use all 32 bits to represent the number... however, they cannot be negative

    Any integer type will default to `signed`. You can still use the keyword in
    the variable declaration.
*/

void signing(void) 
{
  // 2^31 - 1 is the largest `signed int`, 2^32 -1 for `unsigned int`
  signed int signed_int = 2147483647;
  unsigned int unsigned_int = 4294967295;

  // the `int` can also be omitted 
  signed same_as_above = 2147483647;
  unsigned same_as_unsigned_above = 4294967295;
  printf("%d %u\n", same_as_above, same_as_unsigned_above);
  
  printf("The largest signed int is %d. The largest unsigned int is %u\n", signed_int, unsigned_int);
}

/* Integer Overflow:
    An integer overflow is when the result of a computation doesn't fit into 
    the fixed integer size. How to handle that is `undefined behavior`.
    Often the compiler will give you a warning, but will produce an (incorrect)
    value. 
*/
void integer_overflow(void) 
{
  int no_way = 999999999999;
  printf("%d\n", no_way);

  // this will print the wrong result.
  printf("%d\n", 2147483647 + 999);
  
}

void all_integer_types(void) 
{
  
}

int main(void) 
{
  print_int_size();
  signing();
  integer_overflow();
}

