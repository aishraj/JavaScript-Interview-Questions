/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a function that returns an array of all the factorials before a given
 * number.
 * For instance for 6 the function should return [720, 120, 24, 6, 2, 1]
 */

/*____________________________________________________________________________*/


/**
 * @function {public static} getAllFactorials
 *
 * Gets all the factorials before n.
 *
 * @param {Integer} n - the number to get the factorials of.
 *
 * @return an `Array` containing all the factorials before n.
 */
function getAllFactorials(n) {
    var stack = [];

    factorial(n, stack, 0);

    return stack;
}

/**
 * Just for debugging.
 */
function trace(n, level) {
    console.log('>>> n:' + n + ' level:' + level);
}

/**
 * @function {public static} factorial
 *
 * Calculates the factorial and puts the result to a stack.
 *
 * @param {Integer} n - the number to calculate the factorial of.
 * @param {Array} stack - call stack.
 * @param {Integer} level - recursion depth.
 *
 * @return the factorial of the given number.
 */
function factorial(n, stack, level) {
    if (n > 1) {
        trace(n, level);
        stack[level] = n * factorial(n-1, stack, level + 1);
        return stack[level];
    }

    trace(n, level);
    stack[level] = 1;
    return stack[level];
}

/*____________________________________________________________________________*/

console.log(getAllFactorials(10));

/*
Output: ($ /usr/bin/node 002.js)
>>> n:10 level:0
>>> n:9 level:1
>>> n:8 level:2
>>> n:7 level:3
>>> n:6 level:4
>>> n:5 level:5
>>> n:4 level:6
>>> n:3 level:7
>>> n:2 level:8
>>> n:1 level:9
[ 3628800, 362880, 40320, 5040, 720, 120, 24, 6, 2, 1 ]
*/
