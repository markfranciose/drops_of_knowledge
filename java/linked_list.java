class LinkedList
{
	  Node head; // head of list

		// Linked list node
		static class Node 
		{
        int data;
				Node next;

				Node(int d) { data = d; }
		}

		public void printList() 
		{
			  Node n = head;
				while ( n != null)
				{
				    System.out.print(n.data + " ");
						n = n.next;
				}
		}

		public static void main(String[] args)
		{
		    LinkedList listOne = new LinkedList();

				listOne.head = new Node(1);
				Node two     = new Node(2);
				Node three   = new Node(3);

				listOne.head.next = two;
				two.next          = three;

				listOne.printList();
		}
}
