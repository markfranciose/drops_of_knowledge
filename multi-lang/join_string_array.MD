## Ruby:
```
	def smash(words)
		words.join(" ")
	end
```

## Python:
```
	def smash(words):
		return " ".join(words)
```

## JS:
```
	const smash = words => words.join(" ");
```

## Java:

```
	import java.util.Arrays;

	public class SmashWords {
		public static String smash (String... words) {
			return String.join(" ", words);
		}
	}
```

## C#:
```
	public class Kata
	{
		public static string Smash(string[] words)
		{
			return string.Join(" ", words);
		}
	}
```

## Elixir: 
```
	defmodule SentenceSmasher do
		def smash(words) do
			Enum.join(words, " ")
		end
	end


	# fewer lines:

	defmodule SentenceSmasher do
		def smash(words), do: Enum.join(words, " ")
	end

```

## PHP: 
```
	function smash(array $words): string {
		return implode(" ", $words);
	}
```

## CoffeeScript:
```
	smash = (words) -> words.join(" ");
```

