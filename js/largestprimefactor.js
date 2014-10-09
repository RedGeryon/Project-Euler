/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

function lpf(num) {
	var counter = 2;

	while (counter < num/2) {
		while (num % counter === 0) {
			num /= counter;
		}
		counter += 1;
	}

	return num;
}