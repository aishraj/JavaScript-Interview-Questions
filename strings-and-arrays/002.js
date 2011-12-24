/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a JavaScript function that deletes characters from a string.
 * Do not use Regular Expressions.
 * Use this prototype:
 *
 * funtion removeChars(str, remove);
 *
 * For instance
 *
 *      removeChars('The Elder Scrolls of Morrowind', 'eEoi');
 *
 * should give:
 *
 *      'Th ldr Scrlls f Mrrwnd'
 */

/*____________________________________________________________________________*/


/**
 * @function {public static} removeChars
 *
 * Removes characters from a given `String`.
 *
 * @param {String} str - the source `String`.
 * @param {String} remove - a `String` that contains the characters
 * to be removed.
 *
 * @return the modified `String`.
 */
function removeChars(str, remove) {
    var flags = {};
    var i = 0;
    var len = 0;
    var buffer = [];

    for (i = 0, len = remove.length; i < len; i++) {
        flags[remove[i]] = true;
    }

    len = str.length;
    i = 0;

    var s = '';

    while (i < len) {
        s = str[i];

        if (!flags[s]) {
            buffer.push(s);
        }

        i++;
    }

    return buffer.join('');
}

/*____________________________________________________________________________*/

console.log( removeChars('The Elder Scrolls of Morrowind', 'eEoi') );

/*
Output: ($ /usr/bin/node 001.js)
Th ldr Scrlls f Mrrwnd
*/
