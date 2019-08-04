/* @description: This program demonstrates the properties of a structure 
 * in C 
 * @author: Mark Franciose <mark.franciose@gmail.com> 
 */

#include <stdio.h>
#include <string.h>

/* A struct is a type used to represent heterogeneous data types together
 * as a single entity */

/**** STRUCT DEFINITION ****/
// define a struct near top of the file, outside of any functions

struct toddler {
	char  name[64];
	int   months;
	float words;
};

// structs are commonly defined with a typedef

typedef struct {
	char name[64];
	int months;
	float pounds;
} infant;

/**** STRUCT DECLARATION ****/

void structDeclarations(void)
{
	struct toddler victor;
	infant lucas;

	infant room2[12];
}

/**** VALUES ****/
void structValues(void)
{
	struct toddler victor;
	infant lucas;
	infant lucasClone;

	infant room2[12];

	victor.months = 38;
	victor.words = 410.3;
	strcpy(victor.name, "Victor Page Franciose");

	lucas.months = 20;
	lucas.pounds = 30.2;

	room2[0] = lucas;
	lucasClone = lucas;
	room2[1] = lucasClone;
}

int main(int argc, char *argv[])
{
	structDeclarations();
	structValues();
	
	return 0;
}
