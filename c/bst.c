#include <stdio.h>

int main(void)
{
	
	return 0;
}

// These are just basic trees 
struct node
{
	int key;
	struct node *left;
	struct node * right;
};

struct node* newNode(int key)
{
	struct node* node = (struct node*)malloc(sizeof(struct node))data;

	node->key = key;

	node->left = NULL;
	node->right = NULL;

	return(node);
}

// this is for a BST
struct node* search(struct node* root, int key)
{
	if (root == NULL || root->key == key)
		return root;

	if (root -> key < key)
		return search(root->right, key);

	return search(root->left, key);

}


