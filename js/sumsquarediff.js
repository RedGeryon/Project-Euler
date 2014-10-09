/* The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. */

function sumsquarediff(upto) {
    var sumsquare = 0;
	var squaresum = 0;

	for (i = 1; i <= upto; i++) {
		sumsquare += Math.pow(i,2);
	}
	for (j = 1; j <= upto; j++) {
		squaresum += j;
	}
	squaresum = Math.pow(squaresum,2);

	return (squaresum - sumsquare)
}