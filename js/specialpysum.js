/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

function pysum(sum) {
    var a = 1;

	while (a < 999) {
		var b = a + 1;
		var c = sum - a - b;
		while (c > 0 && c > b) {
			if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) {
				return a*b*c
			} else {
				b += 1;
                c = sum - a - b;
			}
		}
		a += 1;
	}

	return null;
}