/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

function multiple35(num) {
    var sum = 0;
	var three = 3;
	var five = 5;
    
	while (three < num) {
		sum += three;
		three += 3;
	}
	while (five < num) {
		if (five % 3 !== 0) {
			sum += five;
		}
		five += 5;
	}
	return sum
}
