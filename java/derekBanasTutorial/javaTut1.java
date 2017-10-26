// everything in Java is a class or an object
// public = available to anyone
// static = only a class can call for this function to execute
// void = does not return any value
// final = when used with a variable can only be initialized once.

public class HelloWorld1
{

	static String randomString = "This is a string" // class var

	static final double PINUM = 3.14;

	public static void main(String[] args)
	{
		System.out.println("Hello World");
		System.out.println(randomString);
		System.out.println(PINUM);

		int integerOne; // this is a declaration statement
		int integerTwo = 22; // can declare and assign at the same time

		int integerThree, integerFour, integerFive; // can declare a bunch of vars at the same time.
		
		double doubleOne = 3, doubleTwo = 3.5, doubleFour = 4.111; // declare and assign multiple vars at once. 
	}
}
