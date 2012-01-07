/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

 /*
  * Given two very large binary trees T1 (with millions of nodes),
  * and T2 (with hundreds of nodes); create an algorithm to decide whether
  * T2 is a subtree of T1.
  *
  */

/*____________________________________________________________________________*/

/**
 * @function {public static} isContainsTree
 *
 * Checks whether t1 contains t2.
 *
 * @param {Node} t1 - root node of the main tree.
 * @param {Node} t2 - root node of the subtree.
 */
function isContainsTree(t1, t2) {
    if (!t2) {
        return true;
    }

    return isSubTree(t1, t2);
}

/**
 * @function {private static} isSubTree
 *
 * Checks whether t1 contains t2.
 *
 * @param {Node} t1 - root node of the main tree.
 * @param {Node} t2 - root node of the subtree.
 *
 * @return `true` if t2 is a subtree of t1, `false` otherwise.
 */
function isSubTree(t1, t2) {
    if (!t1) {
        return false;
    }

    if (t1.value === t2.value) {
        if (isMatch(t1, t2)) {
            return true;
        }
    }

    return (isSubTree(t1.left, t2) || isSubTree(t1.right, t2));
}

/**
 * @function {private static} isSubTree
 *
 * Checks whether t1 and t2 are identical.
 *
 * @param {Node} t1 - root node of the first tree.
 * @param {Node} t2 - root node of the second tree.
 *
 * @return `true` if t1 and t2 are identical in structure, `false` otherwise.
 */
function isMatch(t1, t2) {
    if (!t2 && !t1) {
        return true;
    }

    if (t1.value !== t2.value) {
        return false;
    }

    return isMatch(t1.left, t2.left) && isMatch(t1.right, t2.right);
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

/*
 * Sample tree structure.
 */
var root1 = new Node(
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

var root2 = new Node(
    new Node(null, null, 121),
    null,
130);

console.log( isContainsTree(root1, root2) );

/*
Output: ($ /usr/bin/node 011.js)
true
*/
