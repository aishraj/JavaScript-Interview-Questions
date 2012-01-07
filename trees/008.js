/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

 /*
  * Devise an algorithm to find the lowest common ancestor of a binary search
  * tree, given two nodes. You may assume that both nodes are members of the
  * tree.
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
 * @function {public static} findLowestCommonAncestor
 *
 * Finds the lowest common ancestor between two nodes.
 *
 * @param {Node} root - the root node.
 * @param {Integer} value1 - the left value.
 * @param {Integer} value2 - the right value.
 *
 * @return the found node, if any; `null` otherwise.
 */
function findLowestCommonAncestor(root, value1, value2) {
    var current = root;
    var value = null;

    while (current != null) {
        value = current.value;

        if (value > value1 && value > value2) {
            current = current.left;
        } else if (value < value1 && value < value2) {
            current = current.right;
        } else {
            return current;
        }
    }

    return null;
}

/*____________________________________________________________________________*/

console.log( findLowestCommonAncestor(root, 121, 190) );
console.log( findLowestCommonAncestor(root, 28 , 190) );
console.log( findLowestCommonAncestor(root, 28 , 79 ) );
console.log( findLowestCommonAncestor(root, 62 , 141) );

/*
Output: ($ /usr/bin/node 008.js)

{ left:
   { left: { left: null, right: null, value: 121 },
     right: null,
     value: 130 },
  right: { left: null, right: null, value: 190 },
  value: 141 }
{ left:
   { left: { left: null, right: null, value: 28 },
     right: { left: null, right: null, value: 79 },
     value: 62 },
  right:
   { left: { left: [Object], right: null, value: 130 },
     right: { left: null, right: null, value: 190 },
     value: 141 },
  value: 110 }
{ left: { left: null, right: null, value: 28 },
  right: { left: null, right: null, value: 79 },
  value: 62 }
{ left:
   { left: { left: null, right: null, value: 28 },
     right: { left: null, right: null, value: 79 },
     value: 62 },
  right:
   { left: { left: [Object], right: null, value: 130 },
     right: { left: null, right: null, value: 190 },
     value: 141 },
  value: 110 }
*/
