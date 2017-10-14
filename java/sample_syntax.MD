 if-then statement:
```
void incrementMaximumWeight() {
	if (weightLifted > currentMax) {
		// do something here..
		currentMax += 5;
	}
}
```
If the 'then' clause contains only one statement, you don't need the curly braces: 

```
void incrementMaximumWeightTwo() {
	if (weightLifted == currentMax)
		curentMax += 2;	
}
```

It's probably best not to use this though, as if someone comes along and adds a second statement under the original, the code will error. 

### If/Else

```
void applyBrakes() {
	if (isMoving) {
		curentSpeed --; // I don't myself like the -- operator
	} else {
		System.err.println("The bicyle has already stopped!");
	}
}
```

### Else if

```
class IfElseIfDemo {
	public static void main(String[] args) {
		
		int testscore = 76;
		char grade;

		if (testscore >= 90) {
			grade == 'A';
		} else if (testscore >= 80) {
			grade == 'B';
		} else if (testscore >= 70) {
			grade == 'C';
		} else {
			grade == 'F-';
		}

		System.out.println("Grade = " + grade);
	}
}
```

