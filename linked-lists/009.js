/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Start with the data structure in 008.js
 * Devise an algorithm to flatten the list, so that all the nodes appear
 * in a single-level doubly linked list.
 * Then write an algorithm to unflatten the flattened list back to its
 * initial position.
 * Assume you are given global references to head and tail of the first level
 * list.
 */

 /*____________________________________________________________________________*/

/**
 * @function {public static} flattenList
 *
 * Flattens the list.
 */
function flattenList() {
    var currentNode = head;

    while (currentNode) {
        if (currentNode.child) {
            append(currentNode.child);
        }

        currentNode = currentNode.next;
    }
}

/**
 * @function {public static} append
 *
 * Appends the child to the tail of the list,
 * and updates the tail.
 *
 * @param {ListElement} child - the child node to append.
 */
function append(child) {
    var currentNode = null;

    tail.next = child;
    child.prev = tail;

    currentNode = child;

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    tail = currentNode;
}

/**
 * @function {public static} unflattenList
 *
 * Unflattens the list.
 */
function unflattenList() {
    var currentNode = head;

    unflatten(head);

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    tail = currentNode;
}

/**
 * @function {public static} unflatten
 *
 * Recursively unbinds the childNode from its
 * previous node.
 *
 * @param {ListElement} childNode - the node to unbind.
 */
function unflatten(childNode) {
    var currentNode = childNode;

    while (currentNode) {
        if (currentNode.child) {
            currentNode.child.prev.next = null;
            currentNode.child.prev = null;

            unflatten(currentNode.child);
        }

        currentNode = currentNode.next;
    }
}
