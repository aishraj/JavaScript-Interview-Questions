/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Head and tail are global references to the first and last elements of a
 * singly linked list respectively.
 * Implement the methods with the following prototypes:
 *
 *      function remove(element);
 *      function insertAfter(element, data);
 *
 * Use the structure in 001.js as a template.
 * Make sure to keep head and tail current.
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

/**
 * @function {public static} remove
 *
 * Removes the element from the linked list.
 *
 * @param {ListElement} element - the element to remove.
 *
 * @return `true` if the operation succeeds, `false` otherwise.
 */
function remove(element) {
    var current = head;

    if (!element) {
        return false;
    }

    if (element === head) {
        head = element.next;

        if (!head) {
            tail = null;
        }

        return true;
    }

    while (current) {
        if (current.next === element) {
            current.next = element.next;

            if (current.next === null) {
                tail = current;
            }

            return true;
        }

        current = current.next;
    }

    return false;
}

/**
 * @function {public static} insertAfter
 *
 * Inserts a new node after the given element.
 *
 * @param {ListElement} element - the element to insert after.
 * @param {Integer} data- the value of the inserted node.
 *
 * @return `true` if the operation succeeds, `false` otherwise.
 */
function insertAfter (element, data) {
    var current = head;

    var newElem = new ListElement(null, data);

    if (!element) {
        newElem.next = head;
        head = newElem;

        if (!tail) {
            tail = newElem;
        }

        return true;
    }

    while (current) {
        if (current === element) {
            newElem.next = current.next;
            current.next = newElem;

            if (!newElem.next) {
                tail = newElem;
            }

            return true;
        }

        current = current.next;
    }

    return false;
}

/*____________________________________________________________________________*/

var head = null;
var tail = null;

var firstElement = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement = new ListElement(null, 40);

firstElement.next = secondElement;
secondElement.next = thirdElement;

head = firstElement;
tail = thirdElement;
console.log(head);
insertAfter(secondElement, 50);
console.log(head);
console.log(head.next.next);
insertAfter(thirdElement, 70);
console.log(head);
console.log(head.next.next.next.next);
remove(secondElement);
console.log(head);
remove(firstElement);
console.log(head);
remove(thirdElement);
console.log(head);
insertAfter(null, 10);
console.log(head);
remove(head);
console.log(head);
remove(tail);
console.log(head);
insertAfter(head, 100);
console.log(head);

/*
Output: ($ /usr/bin/node 006.js)
{ next: { next: { next: null, data: 40 }, data: 30 }, data: 20 }
{ next: { next: { next: [Object], data: 50 }, data: 30 }, data: 20 }
{ next: { next: null, data: 40 }, data: 50 }
{ next: { next: { next: [Object], data: 50 }, data: 30 }, data: 20 }
{ next: null, data: 70 }
{ next: { next: { next: [Object], data: 40 }, data: 50 }, data: 20 }
{ next: { next: { next: null, data: 70 }, data: 40 }, data: 50 }
{ next: { next: null, data: 70 }, data: 50 }
{ next: { next: { next: null, data: 70 }, data: 50 }, data: 10 }
{ next: { next: null, data: 70 }, data: 50 }
{ next: null, data: 50 }
{ next: { next: null, data: 100 }, data: 50 }
*/
