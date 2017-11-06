import java.util.Arrays ;

class Main {
  public static void main(String[] args) {
    
    String randomString = "String, yo";
    
    String needToQuote = "\" this works!!";
    
    System.out.println(randomString + needToQuote);
   
    String upperCaseStr = "BIG";
    String lowerCaseStr = "big";
    
    if (upperCaseStr.equalsIgnoreCase(lowerCaseStr)){
      System.out.println("They're equal");
    }
    
    if (upperCaseStr.equals(lowerCaseStr)) {
      System.out.println("You shouldn't see this!!");
    }
    

    // Looks like you have to use .charAt...
    System.out.println("2nd char: " + upperCaseStr.charAt(0));
    
    System.out.println(upperCaseStr.compareTo(lowerCaseStr));
    
    System.out.println(upperCaseStr.contains("IG"));
    
    // endsWith('abc');
    // startsWith('abc'); 
    
    // exactly as expected
    
    //.indexOf("IG"); --> returns 1
    
    //.index of can take an optional second argument:
    
    String longerString = "abcdabcdabcdabcd";
    int indexStarter = longerString.indexOf("d", 13);
    System.out.println(indexStarter);
    
    //.lastIndexOf() does what you would expect.
    
    //.length() as expected
    System.out.println(longerString.length());
    
    //.replace():
    
    String[] letterArray = longerString.split("");
    
    System.out.println(Arrays.toString(letterArray));
    
    char[] charArray = longerString.toCharArray();
    
    System.out.println(Arrays.toString(charArray));
    // index, number of chars to pull.
    String subStringExample = longerString.substring(0,3);
    
    System.out.println("Substring: " + subStringExample);
    
    //.toUpperCase()
    //.toLowerCase()
    
    String untrimmed = "    abcd     ";
    String trimmed = untrimmed.trim();
    
    System.out.println(trimmed);
    
    // Strings in Java are immutable.
    // It does't change the position in memory of the String, it creates a new one. 
    
    // Lots of edits: String Builder.
    // Block of memory it continues to use.
    
    StringBuilder randSB = new StringBuilder("");
    
    System.out.println(randSB);
    
    randSB.append("ok now");
    
    System.out.println(randSB);
    
    randSB.delete(1,2);
    
    System.out.println(randSB);
    
    // length() ..as expected
    
    //.insert(2, "cooler beans")
    
    String convertMe = randSB.toString();
    
    //.charAt()
    //.indexOf()
    //.lastIndexOf()
    //.substring()
    
    
  }
}