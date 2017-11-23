
 // return a number to the nth power. 
 // if the result is odd, return the result rounded to the nearest 10.

function powerRounder(int $num, int $pow): int {
	// php has the ** exponent operator
	$exp - $num ** $pow;
	// php has c style ternary syntax 
	// the num 0 in php evaluates to false
	return $exp % 2 ? 10 * round($exp / 10) : $exp;
}
