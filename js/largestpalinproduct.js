/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

function lpp(digits) {
    var productmax = Math.pow(10,digits) - 1;
    var multiplier = productmax;
    var pali = null;

    //tests for palindrome
    function ispali(num) {
	    num = num.toString().split('');
	    return num.join('') === num.reverse().join('')
	}

	//finds baseline palindrome
	while (pali === null)  {
        if (multiplier < Math.pow(10,digits-1)) {
            productmax -=1;
            multiplier = productmax;
        }
		if (ispali(productmax * multiplier)) {
			pali = productmax * multiplier;
		} else {
			multiplier -= 1;
		}
	}
    
    //sieves for ever larger palindrome combo
    while (productmax > multiplier) {
        var temp = productmax;
        while (temp * productmax > pali && temp > multiplier) {
            if (ispali(productmax * temp)) {
                multiplier = temp;
                pali = multiplier * productmax;
                temp = 0;
            } else {
                temp -= 1;
            }
        }
        productmax -= 1;

    }
    
    return pali

}