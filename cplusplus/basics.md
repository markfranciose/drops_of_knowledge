## Compile a program on linux
```
$ g++ -o output_name input_file.cpp
```

## Declare a string
```c
#include <string>

int main() {
	std::string bestdog = ("Border Collie);
	std::string cooldog("100 foot boxer");
	std::string blankdog; 
}
```

## Conditionals
```c
if ( number < 0 )
	cout << "Yikes!! You're below 0!" << endl;
	cout << "This is going to run either way" << endl;

// without brackets a conditional only applies to the next line of code

if ( number < 0 )
{
	cout << "You're ice cold dog." << endl;
	cout << "But only if you're negative" << endl; 
}	
```

