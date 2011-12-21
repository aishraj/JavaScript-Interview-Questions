/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Q: Start with the data structure in 008.js
 * Devise an algorithm to flatten the list, so that all the nodes appear
 * in a single-level doubly linked list.
 * Then write an algorithm to unflatten the flattened list back to its
 * initial position.
 * Assume you are given global references to head and tail of the first level
 * list.
 */

function flattenList() {
    var currentNode = head;

    while (currentNode) {
        if (currentNode.child) {
            append(currentNode.child, tail);
        }

        currentNode = currentNode.next;
    }
}

function append(child, tail) {
    var currentNode = null;

    tail.next = child;
    child.prev = tail;

    currentNode = child;

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    tail = currentNode;
}

function unflattenList() {
    var currentNode = head;

    unflatten(head);

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    tail = currentNode;
}

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
