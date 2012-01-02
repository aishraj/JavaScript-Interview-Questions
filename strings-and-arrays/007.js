/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Design an algorithm to remove duplicate characters in an Array of characters
 * without using any additional buffer.
 */

/*____________________________________________________________________________*/


/**
 * @function {public static} removeDuplicates
 *
 * Removes duplicates from a `String` `Array`.
 *
 * @param {Array} ar - an `Array` of characters.
 *
 * @return the de-duped `Array`.
 */
function removeDuplicates(ar) {
    if (!ar) {
        return;
    }

    var len = ar.length;

    if (len < 2) {
        return;
    }

    var tail = 1;
    var i = 0;
    var j = 0;

    for (i = 1; i < len; i++) {
        for (j = 0; j < tail; j++) {
            if (ar[i] === ar[j]) {
                break;
            }
        }

        if (j === tail) {
            ar[tail] = ar[i];
            tail++;
        }
    }

    ar.length = tail;

    return ar;
}

/*____________________________________________________________________________*/

console.log( removeDuplicates( 'abcdefghij'.split('')          ) );
console.log( removeDuplicates( 'aaaaaaaaaaaaaa'.split('')      ) );
console.log( removeDuplicates( ''.split('')                    ) );
console.log( removeDuplicates( null                            ) );
console.log( removeDuplicates( 'aaabbbcccddeeffgg'.split('')   ) );
console.log( removeDuplicates( 'ababcdefdecdefababac'.split('')) );

/*
Output: ($ /usr/bin/node 007.js)
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
[ 'a' ]
undefined
undefined
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/
