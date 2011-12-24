/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

 /*
  * Write a function to reverse words of a String.
  * Assume that words are delimeted by a space.
  * Assume punctuations are also parts of a word.
  *
  * Example:
  *
  * Reversing
  *
  *     'Powerful you have become, Dooku. The dark side I sense in you.'
  *
  * should give:
  *
  *     'you. in sense I side dark The Dooku. become, have you Powerful'
  */

/*____________________________________________________________________________*/


/**
 * @function {public static} reverseWords
 *
 * Reverses words of a given `String`.
 *
 * @param {String} str - the `String` to reverse.
 *
 * @return the transformed `String`.
 */
function reverseWords(str) {
    var tokenReadPos = str.length - 1;
    var buffer = [];
    var wordBegin = 0;
    var wordEnd = 0;
    var wordReadPos = 0;

    while (tokenReadPos >= 0) {
        if (str[tokenReadPos] === ' ') {
            buffer.push(str[tokenReadPos--]);
        } else {
            wordEnd = tokenReadPos;

            while (tokenReadPos >= 0 && str[tokenReadPos] != ' ') {
                tokenReadPos--;
            }

            wordReadPos = tokenReadPos + 1;

            while (wordReadPos <= wordEnd) {
                buffer.push(str[wordReadPos++]);
            }
        }
    }

    return buffer.join('');
}

/**
 * @function {public static} reverseWordsAlternate
 *
 * Reverses words of a given `String` (alternative implementation).
 *
 * @param {String} str - the `String` to reverse.
 *
 * @return the transformed `String`.
 */
function reverseWordsAlternate(str) {
    var s = str.split('');
    var end = 0;
    var start = 0;

    var len = s.length;

    reverse(s, 0, len-1);

    while (end < len) {
        if (s[end] !== ' ') {
            start = end;

            while (end < len && s[end] !== ' ') {
                end++;
            }

            end--;

            reverse(s, start, end);
        }

        end++;
    }

    return s.join('');
}

/**
 * @function {public static} reverse
 *
 * Reverses a given portion of an `Array`.
 * The method takes the `Array` by ref, and modifies
 * the original `Array`.
 *
 * @param {Array} s - the `Array` to reverse.
 * @param {Integer} start - start index.
 * @param {Integer} end - end index.
 */
function reverse(s, start, end) {
    var temp = '';

    while (end > start) {
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start++;
        end--;
    }
}

/*____________________________________________________________________________*/

console.log(
    reverseWords(
        'Powerful you have become, Dooku. The dark side I sense in you.'
    )
);

console.log(
    reverseWordsAlternate(
        'Powerful you have become, Dooku. The dark side I sense in you.'
    )
);

/*
Output: ($ /usr/bin/node 003.js)
you. in sense I side dark The Dooku. become, have you Powerful
you. in sense I side dark The Dooku. become, have you Powerful
*/
