/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write method to delete a single element from a linked list.
 * Use the structure in 001.js as a template.
 * Assume you are keeping a global reference to the head of the list.
 * Make sure to update that reference as well.
 */

 /*____________________________________________________________________________*/

/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 */
function ListElement(next, data) {
    this.next = next;
    this.data = data;
}

/*
 * A global reference to the list head.
 */
var head = null;

/**
 * @function {public static} deleteElement
 *
 * Removes the list item from the list.
 *
 * @param {ListElement} itemToDelete - the item to delet.
 */
function deleteElement(itemToDelete) {
    var element = head;

    if (itemToDelete === head) {
        head = itemToDelete.next;
        return;
    }

    while (element) {
        if (element.next === itemToDelete) {
            element.next = itemToDelete.next;
            return;
        }
    }
}

/*____________________________________________________________________________*/

var firstElement = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement = new ListElement(null, 40);

firstElement.next = secondElement;
secondElement.next = thirdElement;
head = firstElement;

console.log(head);
deleteElement(secondElement);
console.log(head);
deleteElement(thirdElement);
console.log(head);
deleteElement(firstElement);
console.log(head);

/*____________________________________________________________________________*/

/*
Output: ($ /usr/bin/node 004.js)
{ next: { next: { next: null, data: 40 }, data: 30 }, data: 20 }
{ next: { next: null, data: 40 }, data: 20 }
{ next: null, data: 20 }
null
*/


