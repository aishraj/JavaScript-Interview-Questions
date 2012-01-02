/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a code to remove duplicates from a linked list.
 */

/*____________________________________________________________________________*/

/**
 * @function {private static} createKey
 *
 * Creates a `String` key from the value of the node.
 *
 * @param {ListElement} currentNode - the node to create a key from.
 *
 * @return the generated `String` key.
 */
function createKey(currentNode) {
    return ['k', currentNode.data].join('');
}

/**
 * @function {public static} removeDuplicates
 *
 * Removes duplicate nodes from a linked list.
 *
 * @param {ListElement} listNode - the head of the list.
 */
function removeDuplicates(listNode) {
    var hash = {};
    var currentNode = listNode;
    var previous = null;
    var key = null;

    while (currentNode !== null) {
        key = createKey(currentNode);

        if (hash[key]) {
            previous.next = currentNode.next;
        } else {
            hash[key] = true;
            previous = currentNode;
        }

        currentNode = currentNode.next;
    }
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
var fouthElement  = new ListElement(null, 20);
var fifthElement  = new ListElement(null, 20);
var sixthElement  = new ListElement(null, 60);

firstElement.next  = secondElement;
secondElement.next = thirdElement;
thirdElement.next  = fouthElement;
fouthElement.next  = fifthElement;
fifthElement.next  = sixthElement;

console.log(firstElement);
removeDuplicates(firstElement);
console.log(firstElement);

/*
Output: ($ /usr/bin/node 012.js)
{ next: { next: { next: [Object], data: 20 }, data: 30 }, data: 20 }
{ next: { next: { next: null, data: 60 }, data: 30 }, data: 20 }
*/
