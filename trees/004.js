/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a non-recursive algorithm to look up a node in a binary search tree.
 * (i.e. find a node. given its value)
 * Use the tree you created in 003.js to test your algorithm.
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
 * @function {public static} findNode
 *
 * Finds the node with a given value.
 *
 * @param {Node} root - the root node.
 * @param {Integer} value - the value to seek.
 *
 * @return a reference to the found node if found, `null` otherwise.
 */
function findNode(root, value) {
    var current = root;
    var val = 0;

    while (current) {
        val = current.value;

        if (val === value) {
            break;
        }

        if (val < value) {
            current = current.right;
        } else {
            current = current.left;
        }
    }

    return current;
}

/*____________________________________________________________________________*/

console.log(findNode(root, 18));
console.log(findNode(root, 22));
console.log(findNode(root, 122));

/*
Output: ($ /usr/bin/node 004.js)
{ left: null, right: null, value: 18 }
{ left: null, right: null, value: 22 }
null
*/
