/* Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000. */

function amicablenum(upto) {
	var amicablesum = 0;

	//returns the sum of divisors using Euler's geometric series sum formula
	function divisorsum(number) {
		var sigma = 1;
		var integer = 2;
		var sum = -number;

		while (integer <= number) {
			var multiplicity = 0;
	        var geosum = 0;

			//find prime divisors, keeping track of multiplicity
			while (number % integer === 0) {
				number /= integer;
				multiplicity += 1;
			}

			//sum up geometric series represented by int and multiplicity
			geosum = ((integer*(1 - Math.pow(integer,multiplicity)))/(1-integer)) + 1;
	        sigma *= geosum;
			integer += 1;
		}

		return (sum + sigma);
	}

	//check num for 'amicability'
	//could be more efficient by removing pairs so they wouldn't need to be checked again.
	for (var i = 2; i < upto; i++) {
		if (i === divisorsum(divisorsum(i)) && i !== divisorsum(i)) {
			amicablesum += i;
		}
	}

	return amicablesum
}