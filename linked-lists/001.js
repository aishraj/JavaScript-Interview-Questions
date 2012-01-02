/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Create a singly linked-list structure in JavaScript.
 * Assume that the list contains integer values.
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

/*____________________________________________________________________________*/

var listItem = new ListElement(null, 10);

console.log(listItem);
console.log(listItem.data);

/*
Output: ($ /usr/bin/node 001.js)
{ next: null, data: 10 }
10
*/
