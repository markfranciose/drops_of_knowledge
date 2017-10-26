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

		int anotherInteger = integerTwo + 5000; // expression statement? 

		// primatives

		byte bigByte = 127;
		short bigShort = 32767;
		int bigInt = 2100000; // 2.1 billion is the biggest number
		long bigLong = 9200000000000000000000000000L; 
		float bigFloat = 3.14Fl
		double bigDouble = 3.14131231231241D; // don't need the D at the end of the double declaration.

		// The max for floats and doubles are system dependent. You can check as follows:

		System.out.println(Float.MAX_VALUE);
		System.out.println(Double.MAX_VALUE);
		// a float is precise to about 6 decimal places
		// a double is precise to around 15 decimal places

		// back to primatives

		boolean trueOrFalse = true;

		char randomChar = 'a';
		char randomChar2 = 65;

		char escapedChars = '\b'; // backspace

		String heresAString = "Yo, this is a string";
		
		String byteString = Byte.toString(bigByte);
		String shortString = Short.toString(bigShort);
		// and so on for Integer.toString(), Long.toString(), Float.toString(), Double.toString(), Boolean.toString()


		// cast = to convert from one primative to another

		double aDoubleValue = 3.14123123;
		int doubleToInt = (int) aDoubleValue;

		int stringToint = Integer.parseInt(intString);

		// parseShort, parseLong, parseByte... so on and so forth

	}
}
