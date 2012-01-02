/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write an algorithm to detect whether a singly-linked list is
 * cyclic, or acyclic.
 *
 * An example to an acyclic list is as follows:
 *
 *      A -> B -> C -> D -> NULL
 *
 * An example to a cyclick list is as follows:
 *
 *      A -> B -> C -> D -> E -> F
 *                    /`\       \./
 *                     I <- H <- G
 *
 * Start with the data structure in 001.js
 * Assume a global pointer to the head of the list.
 */


/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 */
function ListElement(next, data) {
    this.next = next;
    this.data = data;
}


/**
 * @function {public static} isTerminated
 *
 * Checks whether a list is cyclic or not.
 *
 * @return `true`, if the list is `null` terminated;
 * `false` otherwise.
 */
function isTerminated() {
    var fast = null;
    var slow = null;

    fast = slow = head;

    while (true) {
        if (!fast || !fast.next) {
            return true;
        }

        if (fast === slow || fast.next === slow) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }
}
