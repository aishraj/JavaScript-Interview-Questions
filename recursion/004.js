/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a function to perform binary search on a sorted array of integers
 * to return the index of a given target integer.
 * Use the following method prototype:
 *
 *      function binarySearch(array, lower, upper, target);
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

    if (range < 0) {
        throw 'Limits are reversed.';
    }

    if (range === 0 && array[lower] !== target) {
        throw 'Target not in array.';
    }

    if (array[lower] > array[upper]) {
        throw 'Array unordered.';
    }

    var center = Math.floor(range/2) + lower;

    if (target === array[center]) {
        return center;
    }

    if (target < array[center]) {
        return binarySearch(array, lower, center-1, target);
    }


    return binarySearch(array, center+1, upper, target);
}

/*____________________________________________________________________________*/

var ar = [1, 10, 31, 52, 122, 291, 422, 1096];

console.log(binarySearch(ar, 0, 7, 291));

/*
Output: ($ /usr/bin/node 004.js)
5
*/
