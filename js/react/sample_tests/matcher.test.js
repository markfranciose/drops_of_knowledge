// easiest way to test a value is with exact equality:
test('two plus two is four', () => expect(2 + 2).toBe(4));

// expect(2 + 2) returns an 'expectation' object. Typically, only call matcher
// on these. .toBe(4) is the matcher. toBe uses Object.is to test exact 
// equality. To check value, use toEqual. 

// This fails because while they have the same value, they are diff objects
test('object value with toBe', () => {
	const data = {one: 1};
	data["two"] = 2;
	expect(data).toBe({one: 1, two: 2});
});

// This passes:
test('object value with toEqual', () => {
	const data = {one: 1};
	data["two"] = 2;
	expect(data).toEqual({one: 1, two: 2});
});

// toEqual recursively checks every field of an object or array.

// Can test the opposite of a matcher (toBe example below): 

test("adding positive numbers is never zero", () => {
	for (let a = 1; a < 10; a += 1) {
		for (let b = 1; b < 10; b += 1) {
			expect(a +b).not.toBe(0);
		}
	}
});


// Truthiness
// Different Matchers: 
// toBeNull, matches only null, toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUnderfined, toBeTruthy matches
// anything an if treats as true, toBeFalsy is the opposite

test("null", () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined;
	expect(n).not.toBeTruthy;
	expect(n).toBeFalsy;
});

test("0", () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined;
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy;
});
