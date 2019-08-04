/* Enumeration, or enum, is a user-defined data type. It is usually used to 
 * assign names to integer-based constant structures. */

#include <stdio.h>

/* like structs they are commonly defined at the top of a program, outside
 * of any specific function. */

enum flag {f1, f2, f3};
/* by default the values of the enumeration are like the indexes of an array
 * above would be f1 = 0,  f2 = 1, f3 = 2...etc. */

/* variables of type enum can also be defined. Each below is an variable 
 * of an enum type */

enum year {Jan, Feb, Mar, Apr};
enum year month; // var month is of type year

enum day {Midnight, One, Two} hour; // var hour is of type day

int enumDay(void)
{
	enum day hour;
	hour = Midnight;
	printf("%d\n", hour); // this will print 0
	return hour;
}

void enumYearLoop(void)
{
	int i;
	for (i=Jan; i<=Apr; i++) {
		printf("%d\n", i);
	}
	// Will print 0 1 2 3
}

/* values can be assigned non-sequentially. An unassigned name is given
 * the value of the previous name plus one */
enum wildDays {monday = 2, tuesday, wednesday = 30, thursday, friday,
							 saturday = 201, sunday};
void nonSequence(void)
{
	printf("%d %d %d %d %d %d %d\n" , monday, tuesday, wednesday, thursday,
			   friday, saturday, sunday); // will print 2 3 30 31 32 201 202
}

// The value assigned to an enum must be within the range of possible ints
enum bigEnum {eenie = 2147483647};
enum overflowEnum {meeny = 2147483648};
void maxIntEnum(void)
{
	printf("%d\n", eenie); // will print correct value
	printf("%d\n", meeny); // will print -2147483648
	
}

// Enum constants must be unique in their scope.
enum cool {cool = 666, sweet};
// enum cool2 {cool, sweet2};
// the code above would throw: `error: redeclaration of enumerator ‘cool’ `

void differentScopeTest(void)
{
	enum okNow {cool = 8};
	printf("%d\n", cool); // will print 8

}
enum State {WORKING = 0, FAILED, FREEZED};

enum State findState() {
	enum State currState = 2;
	return currState;
}


int main(int argc, char *argv[])
{
	enumDay();
	enumYearLoop();
	nonSequence();
	maxIntEnum();
	differentScopeTest();
	(findState() == FREEZED)? printf("FROZEN"): printf("NOT FROZEN");
	return 0;
}
