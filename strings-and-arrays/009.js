/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a method to detect whether two Strings are anagrams or not.
 */

/*____________________________________________________________________________*/

/**
 * @function {private static} prepare
 *
 * Prepares the `String` for anagram comparison.
 *
 * @param {String} str - the `String` to prepare.
 *
 * @return the prepared `String`.
 */
function prepare(str) {
    return str.replace(/ /g, '').toLowerCase().split('').sort().join('');
}

/**
 * @function {public static} isAnagram
 *
 * Checks whether two given strings are anagrams of each other.
 *
 * @param {String} str1 - the first `String` to test.
 * @param {String} str2 - the second `String` to test.
 *
 * @return `true` if the two `String`s are anagrams, `false` otherwise.
 */
function isAnagram(str1, str2) {
     return prepare(str1) === prepare(str2);
}

/*____________________________________________________________________________*/

console.log( isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort') );

/*
Output: ($ /usr/bin/node 009.js)
true
*/
