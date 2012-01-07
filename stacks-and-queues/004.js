/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a Queue using two Stacks.
 * Use the Stack implementation in 001.js
 */

/*____________________________________________________________________________*/

/**
 * @class {public} Queue
 *
 * Defines a Queue.
 */
function Queue() {
    this.s1 = new Stack();
    this.s2 = new Stack();
}

var qp = Queue.prototype;

/**
 * @function {public} Queue.add
 *
 * Add an item to the queue.
 *
 * @param {Integer} data - the item to be added.
 */
qp.add = function(data) {
    this.s1.push(data);
};

/**
 * @function {public} Queue.peek
 *
 * Gets the value at the front of the queue, without removing the item.
 *
 * @return the value of the item at the front of the queue.
 */
qp.peek = function() {
    if (this.s2.head !== null) {
        return this.s2.peek();
    }

    while (this.s1.head !== null) {
        this.s2.push(this.s1.pop());
    }

    return this.s2.peek();
};

/**
 * @function {public} Queue.remove
 *
 * Removes an item from the front of the queue and returns the value of it.
 *
 * @return the value of the removed item.
 */
qp.remove = function() {
    if (this.s2.head !== null) {
        return this.s2.pop();
    }

    while (this.s1.head !== null) {
        this.s2.push(this.s1.pop());
    }

    return this.s2.pop();
};

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
 * @function {public} Stack.push
 *
 * Pushes data to Stack.
 *
 * @param {Integer} data - the data to push.
 */
sp.push = function(data) {
    var node = new ListElement(null, data);

    if (this.head) {
        node.next = this.head;
        this.head = node;

        return;
    }

    this.head = node;
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
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 */
function ListElement(next, data) {
    this.next = next;
    this.data = data;
}

/*____________________________________________________________________________*/

var queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue.peek());
console.log(queue.remove());
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.peek());
console.log(queue.remove());

/*
Output: ($ /usr/bin/node 020.js)
1
1
2
2
3
3
null
null
*/
