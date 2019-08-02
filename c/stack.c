#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Last In First Out (LIFO)
// First in Last Out (FILO)
// push - add something to top of stack
// pop - remove from top of stack
// peek returntop of stack

struct Stack
{
	int top;
	unsigned capacity;
	int* array;
};

struct Stack createStack(unsigned capacity)
{
	struct Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
	printf("the size of a Stack structure is %d", sizeof(struct Stack));
	stack->capacity = capacity;
	stack->top = -1;
	stack->array = (int*) malloc(stack->capacity * sizeof(int));
	return stack;
}

int isFull(struct* Stack stack)
{
	return stack->top == stack->capacity - 1;
}

int isEmpty(struct* Stack stack)
{
	return stack->top == -1;
}



int main(void)
{

	
	
}
