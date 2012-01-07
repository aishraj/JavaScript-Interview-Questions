/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write an algorithm to do preorder traversal of the binary search
 * tree below. The traverse operation should take a delegete to print
 * the value of the node being traversed. Use the node structure in 002.js
 *
 *           110
 *         /     \
 *        62     141
 *        / \    /  \
 *       28 79  130 190
 *              /
 *            121
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
 * Sample delegate.
 */
function delegate(node) {
    console.log(node.value);
    console.log(node);
}

/**
 * @function {public static} preorderTraversal
 *
 * Does a pre-order traversal on the tree.
 *
 * @param {Node} node - the node to start.
 * @param {Function} delegate - the delegate to execute for each node.
 */
function preorderTraversal(node, delegate) {
    if (node === null) {
        return;
    }

    delegate(node);

    preorderTraversal(node.left, delegate);
    preorderTraversal(node.right, delegate);
}

/*____________________________________________________________________________*/

preorderTraversal(root, delegate);

/*
Output: ($ /usr/bin/node 006.js)
110
{ left:
   { left: { left: null, right: null, value: 28 },
     right: { left: null, right: null, value: 79 },
     value: 62 },
  right:
   { left: { left: [Object], right: null, value: 130 },
     right: { left: null, right: null, value: 190 },
     value: 141 },
  value: 110 }
62
{ left: { left: null, right: null, value: 28 },
  right: { left: null, right: null, value: 79 },
  value: 62 }
28
{ left: null, right: null, value: 28 }
79
{ left: null, right: null, value: 79 }
141
{ left:
   { left: { left: null, right: null, value: 121 },
     right: null,
     value: 130 },
  right: { left: null, right: null, value: 190 },
  value: 141 }
130
{ left: { left: null, right: null, value: 121 },
  right: null,
  value: 130 }
121
{ left: null, right: null, value: 121 }
190
{ left: null, right: null, value: 190 }
*/
