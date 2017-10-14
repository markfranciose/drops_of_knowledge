

## charAt()

public char charAt(int index)

public class CharAtExample {
	public static void main(String args[]){
		String name = "Mark is coool";
		char ch = name.charAt(1); // returns the char value at 1st index ('a')
		System.out.println(ch);
	}
}

## compareTo() 

if s1 > s2, it returns positive number
if s1 < s2, it resuts negative number
if s1 == s2, it returns 0

### Signature:
public int compareTo(String anotherString)

public class CompareToExample{
	public static void main(String[] args){
		String s1 = "hello";
		String s2 = "hello";
		String s3 = "meklo";
		String s4 = "hemlo";
		String s5 = "flag";
		System.out.println(s1.compareTo(s2)); // 0, because equal
		System.out.println(s1.compareTo(s3)); // -5 because h is 5 ahead of m
		System.out.println(s1.compareTo(s4)); // -1 because l is 1 ahead of m
		System.out.println(s1.compareTo(s5)); // 2 because h is 2 behind f
	}
}

## concat()

### signature
public String concat(String anotherString)

public class ConcatExample {
	public static void main(String[] args) {
		String s1 = "java strings";
		s1.concat("are immutable");
		System.out.println(s1);
		s1 = s1.concat("are immutable so assign them explicitly")
		System.out.println(s1);
	}
}

## contains() 

### Signature:
public boolean contains (CharSquence sequence)

public class ContainsExample{
	public static void main(String args[]) {
		String name = "what do you know about me?";
		System.out.println(name.contains("do you know"));
		System.out.println(name.contains("e"));
		System.out.println(name.contains("hello"));
	}
}


