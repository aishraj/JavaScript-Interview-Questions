/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a stack in JavaScript using a linked list.
 * Use the structure in 001.js as a template.
 * Maintain a global reference to the top of the stack.
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
 * A reference to the top.
 */
var top = null;

/**
 * @function {public static} push
 *
 * Pushes data to the stack.
 *
 * @param {Integer} data - the data to push.
 *
 */
function push(data) {
    var element = new ListElement(null, data);
    element.next = top;
}

/**
 * @function {public static} pop
 *
 * Pops data from the stack.
 *
 * @return the popped data.
 */
function pop() {
    var data = top.data;
    top = top.next;
    return data;
}

/*____________________________________________________________________________*/

var firstElement = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement = new ListElement(null, 40);

firstElement.next = secondElement;
secondElement.next = thirdElement;

top = firstElement;

console.log(top);
push(50);
console.log(top);
push(60);
console.log(top);

var data = null;

while (top) {
    data = pop();
    console.log(data);
    console.log(top);
}

/*____________________________________________________________________________*/

/*
Output: ($ /usr/bin/node 005.js)
{ next: { next: { next: null, data: 40 }, data: 30 }, data: 20 }
{ next: { next: { next: [Object], data: 30 }, data: 20 }, data: 50 }
{ next: { next: { next: [Object], data: 20 }, data: 50 }, data: 60 }
60
{ next: { next: { next: [Object], data: 30 }, data: 20 }, data: 50 }
50
{ next: { next: { next: null, data: 40 }, data: 30 }, data: 20 }
20
{ next: { next: null, data: 40 }, data: 30 }
30
{ next: null, data: 40 }
40
null
*/


