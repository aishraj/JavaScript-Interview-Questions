/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write an function to detect whether two `String`s are rotations of each other.
 * (for example: 'Star Wars' is a rotation of 'arsStar W')
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} isRotation
 *
 * Cheks whether two `String`s are rotations of each other.
 *
 * @param {String} str1 - First `String` to check.
 * @param {String} str2 - Rotation `String` to check.
 *
 * @return `true` if str1 is a rotation of str2; `false` otherwise.
 */
function isRotation(str1, str2) {
    var len1 = str1.length;
    var len2 = str2.length;

    if (len1 !== len2) {
        return false;
    }

    return str1.concat(str1).indexOf(str2) > -1;
}

/*____________________________________________________________________________*/

console.log( isRotation('Star Wars', 'arsStar W' ) );
console.log( isRotation('Star Wars', 'Clone Wars') );

/*
Output: ($ /usr/bin/node 014.js)
true
false
*/
