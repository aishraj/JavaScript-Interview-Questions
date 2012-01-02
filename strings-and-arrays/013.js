/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write an function that takes an m by n matrix of integers and if an element
 * is 0 the entire row and column of the matrix is set to 0.
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} setZeros
 *
 * Sets zeros of an entire row or column of a 2-dimensional matrix of integers,
 * if a cell is zero.
 *
 * @param {Array} matrix - the matrix to modify.
 */
function setZeros(matrix) {
    var row = [];
    var column = [];
    var i = 0;
    var j = 0;
    var rowlen = matrix.length;
    var collen = matrix[0].length;

    for (i = 0; i < rowlen; i++) {
        for (j = 0; j < collen; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }

    for (i = 0; i < rowlen; i++) {
        for (j = 0; j < collen; j++) {
            if (row[i] || column[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

/*____________________________________________________________________________*/

var matrix = [
    [ 1,  2,  3,  4,  0,  6,  7],
    [ 8,  9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22,  0, 24,  0, 26, 27, 28],
    [29, 30, 31, 32, 33, 34,  0],
    [36, 37, 38, 39, 40, 41, 42],
]

console.log(matrix);
setZeros(matrix);
console.log(matrix);

/*
Output: ($ /usr/bin/node 013.js)
[ [  1,  2,  3,  4,  0,  6,  7 ],
  [  8,  9, 10, 11, 12, 13, 14 ],
  [ 15, 16, 17, 18, 19, 20, 21 ],
  [ 22,  0, 24,  0, 26, 27, 28 ],
  [ 29, 30, 31, 32, 33, 34,  0 ],
  [ 36, 37, 38, 39, 40, 41, 42 ] ]
[ [  0,  0,  0,  0,  0,  0,  0 ],
  [  8,  0, 10,  0,  0, 13,  0 ],
  [ 15,  0, 17,  0,  0, 20,  0 ],
  [  0,  0,  0,  0,  0,  0,  0 ],
  [  0,  0,  0,  0,  0,  0,  0 ],
  [ 36,  0, 38,  0,  0, 41,  0 ] ]
*/
