/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a method that finds an element in the linked list, given its data.
 * Use the structure in 001.js as a template.
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
 * @function {public static} find
 *
 * Finds the list element with the given data.
 *
 * @param {ListElement} head - the head of the list.
 * @param {Integer} data - the data to find.
 * @return a reference to the list item if found, `null` otherwise.
 */
function find(head, data) {
    var current = head;

    while (current !== null && current.data !== data) {
        current = current.next;
    }

    return current;
}

/*____________________________________________________________________________*/

var firstElement = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement = new ListElement(null, 40);

firstElement.next = secondElement;
secondElement.next = thirdElement;

var item1 = find(firstElement, 20);
var item2 = find(firstElement, 30);
var item3 = find(firstElement, 40);
var item4 = find(firstElement, 50);

console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);

/*____________________________________________________________________________*/

/*
Output: ($ /usr/bin/node 003.js)
{ next: { next: { next: null, data: 40 }, data: 30 }, data: 20 }
{ next: { next: null, data: 40 }, data: 30 }
{ next: null, data: 40 }
null
*/


