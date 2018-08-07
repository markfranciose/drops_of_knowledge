const showName = (first, last) => {
	let nameIntro = "Your name is";

	const makeFullName = () => {
		return nameIntro + first + " " + last;
	}

	return makeFullName();
}

console.log(showName("one", "two"));

// the return of showName, makeFullName() retains access to nameIntro
// this is not a very good example.
