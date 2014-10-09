/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */

function sumprimes(target) {
    var primes = [];
    for (var i = 2; i <= target; i++) {
        primes = primes.concat(i);
    }
    
    var j = 0;
    while (j < primes.length/2) {
    	currprime = primes[j];
    	console.log(currprime);
        for (var k = j + 1; k < primes.length; k++) {
            if (primes[k] % currprime === 0) {
                primes.splice(k,1);
                k -= 1;
                
            }
        }
        j += 1;
    }
    
    return primes.reduce(function(a, b) {return a+b});
}