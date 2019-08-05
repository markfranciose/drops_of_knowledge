#include <stdio.h>
#include <stdlib.h>

int printList( struct* head);
int printList2( struct* n);

struct Node
{
	int data;
	struct Node* next;
};

int printList( struct Node* head)
{
	// while the Node's next is not NULL print the data and go to next node
	while (head->next != NULL) {
	 printf("%d\n", head->data);
	 head = head->next;
	}
	
	// once reaching the final node (i.e. next is NULL), print data and return
	printf("%d\n", head->data);
	return 0;
}

// This also works because on the final Node, when n is assigned to next, it
// will be null. 
int printList2(struct Node* n)
{
	while ( n != NULL ) {
		printf("%d\n", n->data);
		n = n->next;
	}
}

int main(void)
{
	struct Node* head = NULL;
	struct Node* two = NULL;
	struct Node* three = NULL;

	head = (struct Node*)malloc(sizeof(struct Node));
	two = (struct Node*)malloc(sizeof(struct Node));
	three = (struct Node*)malloc(sizeof(struct Node));
		
	head->data = 10;
	head->next = two;

	two->data = 12;
	two->next = three;

	three->data = 14;
	three->next = NULL;

	printList(head);
	printList2(head);

	return 0;
}
