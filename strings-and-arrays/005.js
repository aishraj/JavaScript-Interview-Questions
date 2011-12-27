/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement an algorithm to see whether a String has all unique characters.
 */

/*____________________________________________________________________________*/


/**
 * @function {public static} isUniqueChar
 *
 * Finds whether a `String` has all unique chars.
 *
 * @param {String} str - the `String` to test.
 *
 * @return `true` if the `String` has all unique chars, `false` otherwise.
 */
function isUniqueChars(str) {
    var hash = {};

    var i = 0;
    var len = str.length;

    for (i = 0; i < len; i++) {
        if (hash[str[i]]) {
            return false;
        }

        hash[str[i]] = true;
    }

    return true;
}

/*____________________________________________________________________________*/

console.log(isUniqueChars('abcd'));
console.log(isUniqueChars('abbd'));

/*
Output: ($ /usr/bin/node 005.js)
true
false
*/
