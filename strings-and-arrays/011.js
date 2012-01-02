/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a method to replace all spaces in a String with %20.
 * *DO NOT* use Regular Expressions.
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} replace
 *
 * Replaces instances of ' ' with '%20'.
 *
 * @param {String} str - the `String` to replace.
 *
 * @return the replaced `String`.
 */
function replace(str) {
    var spaceCount = 0;
    var i = 0;
    var ar = str.split('');
    var len = ar.length;

    for (i = 0; i < len; i++) {
        if (ar[i] === ' ') {
            spaceCount++;
        }
    }

    var newLength = len + spaceCount * 2;

    ar.length = newLength;

    for (i = len -1; i >= 0; i--) {
        if (ar[i] === ' ') {
            ar[newLength - 1] = '0';
            ar[newLength - 2] = '2';
            ar[newLength - 3] = '%';

            newLength -= 3;
        } else {
            ar[newLength -1] = ar[i];

            newLength--;
        }
    }

    return ar.join('')
}

/*____________________________________________________________________________*/

console.log( replace('recursion is to know what recursion is.'))

/*
Output: ($ /usr/bin/node 011.js)
recursion%20is%20to%20know%20what%20recursion%20is.
*/
