/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Start with the data structure in 001.js
 * Modify it, so that it can be used to hold the data
 * for a multi-level doubly linked list of integers.
 */

 /*____________________________________________________________________________*/

/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {ListElement} prev - the previous node. (null if it's a head)
 * @param {ListElement} child - a reference to the head of a child list, or
 * `null` if the list element does not have any child.
 * @param {Integer} data - list data.
 */
function ListElement(next, prev, child, data) {
    this.next = next;
    this.prev = prev;
    this.child = child;
    this.data = data;
}
