/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement the algorithm in 004.js using recursion.
 */

/*____________________________________________________________________________*/

/**
 * @class {public} Node
 *
 * A typical binary tree node.
 *
 * @param {Node} left - the left node.
 * @param {Node} right - the right node.
 * @param {Integer} value - the value of this node.
 */
function Node(left, right, value) {
    this.left = left;
    this.right = right;
    this.value = value;
}

/*
 * Sample tree structure.
 */
var root = new Node(
    new Node(
        new Node(null, null, 11),
        new Node(null, null, 15),
        13
    ),
    new Node(
        new Node(null, null, 18),
        new Node(null, null, 22),
        20
    ),
    15
);

/**
 * for debugging.
 */
function trace(seek, found, level) {
    console.log(
        '   seek: ' + seek  +
        ', found: ' + found +
        ', level: ' + level );
}

/**
 * @function {public static} findNode
 *
 * Finds the node with a given value.
 *
 * @param {Node} root - the root node.
 * @param {Integer} value - the value to seek.
 *
 * @return a reference to the found node if found, `null` otherwise.
 */
function findNode(root, value, level) {
    var current = root;
    var val = 0;

    level = level || 0;

    if (current === null) {
        return null;
    }

    val = current.value;

    if (val === value) {
        trace(value, val, level);
        return current;
    }

    if (val < value) {
        trace(value, val, level);
        return findNode(current.right, value, ++level);
    }

    trace(value, val, level);
    return findNode(current.left, value, ++level);
}

/*____________________________________________________________________________*/

console.log(findNode(root, 18));
console.log(findNode(root, 22));
console.log(findNode(root, 122));

/*
Output: ($ /usr/bin/node 005.js)
   seek: 18, found: 15, level: 0
   seek: 18, found: 20, level: 1
   seek: 18, found: 18, level: 2
{ left: null, right: null, value: 18 }
   seek: 22, found: 15, level: 0
   seek: 22, found: 20, level: 1
   seek: 22, found: 22, level: 2
{ left: null, right: null, value: 22 }
   seek: 122, found: 15, level: 0
   seek: 122, found: 20, level: 1
   seek: 122, found: 22, level: 2
null

*/
