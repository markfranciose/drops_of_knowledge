import java.util.Scanner; // able to accept user input
// import java.util.*; 

public class JavaLessonTwo
{
	static Scanner userInput = new Scanner(System.in);

	public static void main(String[] args)
	{
			System.out.print("Your favorite number"); // print doesn't add in the newline

			if (userInput.hasNextInt()) // If the next thing typed into the keyboard is an int
			{
				// .hasNextFloat ... and so on and so forth
				int numberEntered =  userInput.nextInt(); // recieves userinput and stores it into numberEntered
				// nextDouble(), nextLine() ... etc.

				System.out.println("You entered: " + numberEntered);
			}
	}
}
