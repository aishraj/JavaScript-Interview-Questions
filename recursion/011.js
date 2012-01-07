/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write an iterative method to generate nth Fibonacci number.
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

    var i = 0;
    var c = 0;
    var a = 1;
    var b = 1;

    for (i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

/*____________________________________________________________________________*/

console.log( fibonacci(99) );

/*
Output: ($ /usr/bin/node 011.js)
218922995834555200000
*/


