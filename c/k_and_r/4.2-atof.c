#include <ctype.h>

double atof(char[] s);

int main(void)
{
	
	return 0;
}

double atof(char[] s)
{
	double val, power;
	int i, sign;

	/* skip leading whitespace */
	for (i = 0; isspace(s[i]); i++) {
		;
	}

	/* if the first char encountered is a minus sign, 
	 * we're going to hold -1 to multiply at end */
  sign = (s[i] == '-') ? -1 : 1;

	if (s[i] == '+' || s[i] == '-') {
		i++;
	}
	/* while processing digits: */
	for (val = 0.0; isdigit(s[i]); i++) {
		val = 10.0 * val + (s[i] - '0');
	}

}

