/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a function that calculates the factorial of a given number recursively.
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} factorial
 *
 * Recursively calculates the factorial of a given number.
 *
 * @param {Integer} n - the number to calculate.
 *
 * @return the factorial of the given number.
 */
function factorial(n) {
    if (n > 1) {
        return n * factorial(n-1);
    }

    return 1;
}

/*____________________________________________________________________________*/

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

/*
Output: ($ /usr/bin/node 001.js)
24
120
720
*/


