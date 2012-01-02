/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a code to remove an element from a singly linked list, given only
 * access to that element.
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} deleteNode
 *
 * Deletes a node from the middle of a linked list.
 *
 * @param {ListElement} node - the node to delete.
 *
 * @return `true` if the node could be deleted successfully,
 * `false` otherwise.
 */
function deleteNode(node) {
    if (!node || !node.next) {
        return false;
    }

    var next = node.next;
    node.data = next.data;
    node.next = next.next;

    return true;
}

/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 */
function ListElement(next, data) {
    this.next = next;
    this.data = data;
}

/*____________________________________________________________________________*/

var firstElement  = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement  = new ListElement(null, 20);
var fourthElement = new ListElement(null, 20);

firstElement.next  = secondElement;
secondElement.next = thirdElement;
thirdElement.next  = fourthElement;

console.log( firstElement              );
console.log( deleteNode(thirdElement)  );
console.log( firstElement              );
console.log( deleteNode(fourthElement) );
console.log( firstElement              );
console.log( deleteNode(secondElement) );
console.log( firstElement              );

/*
Output: ($ /usr/bin/node 014.js)
{ next: { next: { next: [Object], data: 20 }, data: 30 }, data: 20 }
true
{ next: { next: { next: null, data: 20 }, data: 30 }, data: 20 }
false
{ next: { next: { next: null, data: 20 }, data: 30 }, data: 20 }
true
{ next: { next: null, data: 20 }, data: 20 }
*/
