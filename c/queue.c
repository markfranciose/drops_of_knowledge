#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// A structure to represent the Queue
struct Queue {
	int			 front, rear, size;
	unsigned capacity;
	int*		 array;
};

// function to create a queue of given capacity
// Initializes size of queue as 0
struct Queue* createQueue(unsigned capacity)
{
	struct Queue* queue = (struct Queue) malloc(sizeof(struct Queue));
	queue->capacity = capacity;
	queue->front = queue->size = 0;
	queue->rear = capacity - 1;
	queue->array = (int *) malloc(capacity * (sizeof(int)));
}

int isFull(struct Queue* queue)
{
	return queue->size == queue->capacity;	
}

int isEmpty(struct Queue* queue)
{
	return queue->size == 0;
}



int main(void)
{

	// struct Queue = 
	
	return 0;
}
