/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Given a circular linked list, implement an algorithm which returns the node
 * at the beginning of the loop.
 */

/*____________________________________________________________________________*/

/**
 * @function {public static} findBeginning
 *
 * Finds the beginning of the loop in a circular linked list.
 *
 * @param {ListElement} head - the head of the list.
 *
 * @return the loop node if found, `null` if list is not circular.
 */
function findBeginning(head) {
    var n1 = head;
    var n2 = head;

    while (n2.next) {
        n1 = n1.next;
        n2 = n2.next.next;

        if (n1 === n2) {
            break;
        }
    }

    if (!n2.next) {
        return null;
    }

    n1 = head;

    while (n1 !== n2) {
        n1 = n1.next;
        n2 = n2.next;
    }

    return n2;
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


var a1 = new ListElement(null, 1);
var a2 = new ListElement(null, 2);
var a3 = new ListElement(null, 3);
var a4 = new ListElement(null, 4);
var a5 = new ListElement(null, 5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a3;

console.log( findBeginning(a1).data );

/*
Output: ($ /usr/bin/node 016.js)
3
*/
