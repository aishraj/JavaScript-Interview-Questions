/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

 /*
  * Implement a function to check if a tree is balanced.
  * A balance tree is a tree with no two leaf nodes differ in distance from the
  * root by more than one.
  * Use the Node structure in 007.js
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
        new Node(null, null, 28),
        new Node(null, null, 79),
        62
    ),
    new Node(
        new Node(
            new Node(null, null, 121),
            null,
            130),
        new Node(null, null, 190),
        141
    ),
    110
);

/**
 * @function {public static} getMaxDepth
 *
 * Gets the maximum depth of a subtree.
 *
 * @param {Node} root - the node to start.
 *
 * @return the max depth of the subtree.
 */
function getMaxDepth(root) {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(getMaxDepth(root.left), getMaxDepth(root.right));
}

/**
 * @function {public static} getMinDepth
 *
 * Gets the minimum depth of a subtree.
 *
 * @param {Node} root - the node to start.
 *
 * @return the min depth of the subtree.
 */
function getMinDepth(root) {
    if (!root) {
        return 0;
    }

    return 1 + Math.min(getMinDepth(root.left), getMinDepth(root.right));
}

/**
 * @function {public static} isBalanced
 *
 * Checks whether the tree is balanced.
 *
 * @param {Node} root - the root node of the tree.
 */
function isBalanced(root) {
    return getMaxDepth(root) - getMinDepth(root) <= 1;
}

/*____________________________________________________________________________*/

console.log( isBalanced(root) );

/*
Output: ($ /usr/bin/node 009.js)
true
*/
