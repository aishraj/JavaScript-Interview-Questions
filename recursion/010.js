/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a recursive method to generate nth Fibonacci number.
 * F(n) = F(n-1) + F(n-1); F(0) == 0, F(1) == 1;
 */

/*____________________________________________________________________________*/

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    if (n < 1) {
        return -1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

/*____________________________________________________________________________*/

console.log( fibonacci(42) );

/*
Output: ($ /usr/bin/node 010.js)
267914296
*/


