/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Extend the functionality of the Stack in 001.js, add a min method that
 * returns the minimum of the Stack.
 */

/*____________________________________________________________________________*/

/**
 * @class {public} Stack
 *
 * A basic stack implementation.
 */
function Stack() {
    this.head = null;
}

var sp = Stack.prototype;

/**
 * @function {private static} pushNode
 *
 * Pushes a node to the given stack.
 *
 * @param {Stack} self - the `Stack` to push node to.
 * @param {ListItem} node - the node to push.
 */
function pushNode(self, node) {
    if (self.head) {
        self.next = self.head;
        self.head = node;

        return;
    }

    self.head = node;
};

/**
 * @function {public} Stack.push
 *
 * Pushes data to Stack.
 *
 * @param {Integer} data - the data to push.
 */
sp.push = function(data) {
    pushNode(this, new ListElement(null, data, 0));
};

/**
 * @function {public} Stack.pop
 *
 * Pops data from the Stack.
 *
 * @return the popped data.
 */
sp.pop = function() {
    if (this.head) {
        var tmp = this.head;

        this.head = this.head.next;

        return tmp.data;
    }

    return null;
}

/**
 * @function {public} Stack.peek
 *
 * Gets the value at the top of the stack.
 *
 * @return the top value if exists, `null` if stack is empty.
 */
sp.peek = function() {
    if (this.head) {
        return this.head.data;
    }

    return null;
};

/**
 * @class {public} StackWithMin
 * @extends Stack
 *
 * An extended `Stack` implementatin that tracks min values.
 *
 */
function StackWithMin() {
    this.head = null;
}

StackWithMin.prototype = new Stack();
var smp = StackWithMin.prototype;
smp.constructor = StackWithMin;
smp.base = Stack;

/**
 * @function {public} StackWithMin.push
 * @overrides Stack.push
 */
smp.push = function(data) {
    var newMin = Math.min(data, this.min());

    pushNode(this, new ListElement(null, data, newMin));
};

/**
 * @function {public} StackWithMin.min
 *
 * Gets the minimum value in the stack.
 *
 * @return the minimum value if stack is not empty;
 * Number.MAX_VALUE otherwise.
 */
smp.min = function() {
    if (this.head === null) {
        return Number.MAX_VALUE;
    }

    return this.head.min;
};

/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 * @param {Integer} min - the number that this list item stores as a local min.
 */
function ListElement(next, data, min) {
    this.next = next;
    this.data = data;
    this.min  = min;
}

/*____________________________________________________________________________*/

var stack = new StackWithMin();
stack.push(11);
stack.push(22);
stack.push(3);
stack.push(42);
stack.push(5);

console.log( stack.min() );

/*
Output: ($ /usr/bin/node 002.js)
3
*/
