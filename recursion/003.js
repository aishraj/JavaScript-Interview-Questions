/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement getAllFactorials method in 002.js *without* using recursion.
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
    var val = 1;
    var i = 0;
    var temp = 0;

    if (n <= 1) {
        stack.push(1);
        return stack;
    }

    for(i = 1; i <= n; i++) {
        temp = val * i;
        stack.push(temp);
        val = temp;
    }

    return stack.reverse();
}

console.log(getAllFactorials(10));

/*____________________________________________________________________________*/

/*
Output: ($ /usr/bin/node 003.js)
[ 3628800, 362880, 40320, 5040, 720, 120, 24, 6, 2, 1 ]
*/
