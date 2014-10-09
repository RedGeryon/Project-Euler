//should return array with missing element of array two

function smallestmultiple(upto) {
    var commonmultiples = [];

    //find prime factors of num
	function factorize(num) {
	    var factors = []; var start = 2;
	    while (start < num) {
	        while (num % start === 0) {
	            factors.push(start);
	            num /= start;
	        }
	        start += 1;
	    }
	    if (num !== 1) {factors.push(num)}
	    return factors
	}

	//helper module to 'return diff' function that removes a num from arr if it exists
	function removenum(num, array) {
	    var index = array.indexOf(num);
	    if (index > -1) {
	        array.splice(index, 1);
	    }
	    return array
	}

	//takes main array and sees if compare array's elements exist in main, other will add to main
	function returndiff(main, compare) {
	    main.forEach(function(num) {
	        removenum(num, compare);
	    })
	    return main.concat(compare)
	}

	//checks that the factors of each num exists as common multiples, if not will add
	for (i = 2; i <= upto; i++) {
		var divisors = factorize(i);
        commonmultiples = (returndiff(commonmultiples, divisors));
	}
    
    //takes the product of the least common multiples array
    return commonmultiples.reduce(function(a,b) {
        return a*b
    })
}