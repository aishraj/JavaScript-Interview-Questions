/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Rewrite the algorithm in 007.js that removes duplicate characters in
 * an Array of characters.
 * You can use an additional buffer to obtain algorithmic efficiency.
 * Assume you are dealing with ASCII characters only.
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

    var hit = [];
    var i = 0;
    var j = 0;
    var tail = 1;

    hit[ar[0].charCodeAt(0)] = true;

    for (i = 1; i < len; i++) {
        if (!hit[ar[i].charCodeAt(0)]) {
            ar[tail] = ar[i];
            hit[ar[i].charCodeAt(0)] = true;
            tail++;
        }
    }

    ar.length = tail;

    return ar;
}

 /**
  * @function {public static} removeDuplicates
  *
  * Removes duplicates from a `String` `Array`.
  * This method uses an associative-array of `String`s.
  *
  * @param {Array} ar - an `Array` of characters.
  *
  * @return the de-duped `Array`.
  */
function removeDuplicatesHash(ar) {
    if (!ar) {
        return;
    }

    var len = ar.length;

    if (len < 2) {
        return;
    }

    var hit = {};
    var i = 0;
    var j = 0;
    var tail = 1;

    hit[ar[0]] = true;

    for (i = 1; i < len; i++) {
        if (!hit[ar[i]]) {
            ar[tail] = ar[i];
            hit[ar[i]] = true;
            tail++;
        }
    }

    ar.length = tail;

    return ar;
}

/*____________________________________________________________________________*/

console.log( removeDuplicates( 'abcdefghij'.split('')              ) );
console.log( removeDuplicates( 'aaaaaaaaaaaaaa'.split('')          ) );
console.log( removeDuplicates( ''.split('')                        ) );
console.log( removeDuplicates( null                                ) );
console.log( removeDuplicates( 'aaabbbcccddeeffgg'.split('')       ) );
console.log( removeDuplicates( 'ababcdefdecdefababac'.split('')    ) );

console.log( removeDuplicatesHash( 'abcdefghij'.split('')          ) );
console.log( removeDuplicatesHash( 'aaaaaaaaaaaaaa'.split('')      ) );
console.log( removeDuplicatesHash( ''.split('')                    ) );
console.log( removeDuplicatesHash( null                            ) );
console.log( removeDuplicatesHash( 'aaabbbcccddeeffgg'.split('')   ) );
console.log( removeDuplicatesHash( 'ababcdefdecdefababac'.split('')) );

/*
Output: ($ /usr/bin/node 008.js)
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
[ 'a' ]
undefined
undefined
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
[ 'a' ]
undefined
undefined
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/
