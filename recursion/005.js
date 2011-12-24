/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement the binarySearch function in 004.js *without* using recursion.
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} binarySearch
 *
 * Performs a binary search on a sorted `Array`.
 *
 * @param {Array} array - the `Array` to search.
 * @param {Integer} lower - the lower index to search.
 * @param {Integer} upper - the upper index to search.
 * @param {Integer} target - the element to match.
 *
 * @return the matched elements index.
 *
 * @throw exception if element is not found, or array is not ordered,
 * or indexes are not in order.
 */
function binarySearch(array, lower, upper, target) {
    var range = upper - lower;
    var center = 0;

    if (range < 0) {
        throw 'Limits are reversed.';
    }

    while (true) {
        range = upper - lower;

        if (range === 0 && array[lower] !== target) {
            throw 'Target not in array.';
        }

        if (array[lower] > array[upper]) {
            throw 'Array unordered.';
        }

        center = Math.floor(range/2) + lower;

        if (target === array[center]) {
            return center;
        }

        if (target < array[center]) {
            upper = center - 1;
        } else {
            lower = center + 1;
        }
    }
}

/*____________________________________________________________________________*/

var ar = [1, 10, 31, 52, 122, 291, 422, 1096];

console.log(binarySearch(ar, 0, 7, 291));

/*
Output: ($ /usr/bin/node 005.js)
5
*/
