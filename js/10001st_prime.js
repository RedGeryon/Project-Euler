/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

function nthprime(nth) {
	var primes = [2];
	var currnum = 3;

	while (primes.length < nth) {
		for (i = 0; i < primes.length; i++) {
			if (primes[i] * 2 > currnum) {
				break;
			}
			if (currnum % primes[i] === 0) {
				currnum += 1;
				i = -1;
			}
		}
		primes.push(currnum);
		currnum += 1;
	}

	return primes[primes.length - 1]
}