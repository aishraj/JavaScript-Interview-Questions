/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement StackWithMin in 002.js, with the following ListElement structure:
 *
 *      function ListElement(next, data) {
 *          this.next = next;
 *          this.data = data;
 *      }
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
 */
function StackWithMin() {
    this.head = null;
    this.cache = new Stack();
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

    if (data <= this.min()) {
        this.cache.push(data);
    }

    this.base.prototype.push.apply(this, [data]);
};

/**
 * @function {public} StackWithMin.pop
 * @overrides Stack.pop
 */
smp.pop = function() {
    var value = this.base.prototype.pop.apply(this, []);

    if (value === this.min()) {
        this.cache.pop();
    }

    return value;
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
    if(this.cache.head === null) {
        return Number.MAX_VALUE;
    }

    return this.cache.head.data;
};

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

var stack = new StackWithMin();
stack.push(11);
stack.push(22);
stack.push(3);
stack.push(42);
stack.push(5);

console.log( stack.min() );

/*
Output: ($ /usr/bin/node 003.js)
3
*/
