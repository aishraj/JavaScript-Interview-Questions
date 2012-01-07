/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

 /*
  * Given a sorted array, write an algorithm to create a binary tree
  * with minimal height.
  * Use the Node structure in 007.js
  */

/*____________________________________________________________________________*/

function addToTree(ar, start, end) {
    if (end < start) {
        return null;
    }

    var mid = Math.floor((start+end)/2);

    var n = new Node(null, null, ar[mid]);
    n.left = addToTree(ar, start, mid - 1);
    n.right = addToTree(ar, mid + 1, end);

    return n;
}

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

var ar = [1, 2, 3, 4, 5, 6, 7, 8];

console.log( addToTree(ar, 0, ar.length - 1) );

/*
Output: ($ /usr/bin/node 010.js)
{ left:
   { left: { left: null, right: null, value: 1 },
     right: { left: null, right: null, value: 3 },
     value: 2 },
  right:
   { left: { left: null, right: null, value: 5 },
     right: { left: null, right: [Object], value: 7 },
     value: 6 },
  value: 4 }
*/
