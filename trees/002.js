/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Define a binary tree node structure in JavaScript.
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

/*____________________________________________________________________________*/

var root = new Node(null, null, 1000);
var left = new Node(null, null, 1010);
var right = new Node(null, null, 1001);

root.left = left;
root.right = right;

console.log(root);

/*
Output: ($ /usr/bin/node 002.js)
{ left: { left: null, right: null, value: 1010 },
  right: { left: null, right: null, value: 1001 },
  value: 1000 }
*/
