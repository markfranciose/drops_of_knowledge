public class DataTypesBoolean {
	public static void main(String[] args) {
		
		System.out.println(true);
		System.out.println(false); 

	}
}

public class DataTypesChar {
	public static void main(String[] args) {
		
		System.out.println('G');

	}
}

// Char values are enclosed in single quotes

public class DataTypesString {
	public static void main(String[] args) {
	
		System.out.println("Strings are enclosed in double quotes.")

	}
}

public class Variables {
	public static void main(String[] args) {
	
		int myNumber = 100;
		boolean isFun = true;
		char movieRating = 'A';

	}
}

public class WhiteSpace {
	public static void main(String[] args) {
	
		boolean isFormatted = false;
		System.out.println(isFormatted);
	
	}
}

// Java uses the standard operators

public class StandardOperators {
	public static void main(String[] args) {
	
		int addedNum = 2 + 3;
		int subtractedNum = 3 - 2;
		int multipliedNum = 3 * 2;
		int dividedNum = 3 / 2;
	
	}
}

public class Modulo {
	public static void main(String[] args) {
	
		int myRemainder = 5 % 3;	
	
	}
}

// Standard relational operators as well.

public class RelationalOperators { 
	public static void main(String[] args) {

		System.out.println(3 <= 100); // will print out 'true', as it evaluates the expression

	}
}


public class EqualityOperators {
	public static void main (String[] args) {
	
		System.out.print(3 != 4);
		System.out.print(100 == (101 -1));
	
	}
}

// first example of a program that they have us write:

public class Magic {
	public static void main(String[] args) {
		
		int myNumber = 69;
		int stepOne = myNumber * myNumber;
		int stepTwo = stepOne + myNumber;
		int stepThree = stepTwo / myNumber;
		int stepFour = stepThree + 17;
		int stepFive = stepFour - myNumber;
		int stepSix = stepFive / 6;
		System.out.println(stepSix);

		// This program does some stuff to a number.
					
	}
}


public class Conditionals {
	public static void main(String[] args) {
		if (1 < 4 && 0 > 5) {
			System.out.println("You ordered a cup of tea");	
		}	else if (21 <= 19 || 17 >= 28) {
			System.out.println("You ordered milky");				
		} else if ( !(true == true) ) {
			System.out.println("You ordered OJ")
		} else {
			System.out.println("You ordered a cup of Java");
		}	

		char answerChoice = 'C';

		switch (answerChoice) {
		  case 'A': System.out.println("You answered: " + answerChoice + ". Please try again.");
								break;
								
		  case 'B': System.out.println("You answered: " + answerChoice + ". Please try again.");
								break;

		  case 'C': System.out.println("You answered: " + answerChoice + ". That is correct.");
								break;

		  case 'D': System.out.println("You answered: " + answerChoice + ". Please try again.");
								break;

			default:
								System.out.println("Please select a valid answer choice.")
		}

	}
}

public class And {
				public static void main(String[] args) {

								System.out.println(3 == 3 && 4 == 4);
				}
}

public class Or {
	public static void main(String[] args) {

		System.out.println(3 == 4 || !false);

	}
}

public class BooleanOperatorPrecedence {
	public static void main(String[] args) {

		boolean noWay = 3 == 5;
		int five = 5;
		int seven = 7;
		System.out.println(!noWay || five > 7 && seven < 5);
		// ! is evaluated first, && is evaluated second, || is evaluated third

	}
}

// Much of this is basic control flow stuff.

// Ooooo. ternary conditionals... 
 
public class Ternary {
	public static void main(String[] args) {
		int fuelLevel = 3;
		char canDrive = (fuelLevl > 0) ? 'Y' : 'N';
		System.out.println(canDrive);
	}
}

