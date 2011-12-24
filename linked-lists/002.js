/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Take the list implementation in 001.js
 * Write a JavaScript function to insert in front of that list.
 * The function should take head and the new data as parameters.
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
 * @function {public static} insertInFront
 * Insert in front of a list.
 *
 * @param {ListElement} head - the head of the list to insert.
 * @param {Integer} data - list data.
 */
function insertInFront(head, data) {
    var list = new ListElement(null, data);
    head.next = list;
}

/*____________________________________________________________________________*/

var listItem = new ListElement(null, 10);

console.log(listItem);
console.log(listItem.data);

insertInFront(listItem, 20);

console.log(listItem.next);
console.log(listItem.next.data);

console.log(listItem.next.next);

/*____________________________________________________________________________*/

/*
Output: ($ /usr/bin/node 002.js)
{ next: null, data: 10 }
10
{ next: null, data: 20 }
20
null
*/
