import java.util.Arrays;
import java.util.Collections;

public class ReverseWords{

	public static String reverseWords(String str){

		String[] array = str.split(" ");

		Collections.reverse(Arrays.asList(array));

		String result = String.join(" ", array);

		return result;
	}
}