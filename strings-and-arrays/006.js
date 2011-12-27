/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a code to reverse a String.
 * Do not use native helpers like Array.reverse or String.reverse.
 */

/*____________________________________________________________________________*/


/**
 * @function {public static} reverse
 *
 * Reverses the given `String`.
 *
 * @param {String} str - the `String` to reverse.
 *
 * @return the reversed `String`.
 */
function reverse(str) {
    if (!str) {
        return '';
    }

    var i = 0;
    var end = 0;
    var tmp = '';
    var len = str.length;


    var ar = str.split('');

    for (i = 0; i < Math.floor(len/2); i++) {
        end = len - i - 1;
        tmp = ar[end];
        ar[end] = ar[i];
        ar[i] = tmp;
    }

    return ar.join('');
}

/*____________________________________________________________________________*/

console.log(reverse('abcdefgh'));
console.log(reverse('abcdefghi'));
console.log(reverse('a'));
console.log(reverse(''));

/*
Output: ($ /usr/bin/node 006.js)
hgfedcba
ihgfedcba
a
<empty string>
*/
