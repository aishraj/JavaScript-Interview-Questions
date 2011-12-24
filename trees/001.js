/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * A Tree is a data structure that consists of zero or more child Nodes, where
 * each child Node can also have zero or more child Nodes.
 *
 * Implement an _"immutable"_ tree Node in JavaScript.
 * That is to say, once constructed, it should be impossible to alter
 * the Node's value, or add/remove a child node to it.
 *
 * Assume that a Node can have zero or more child Nodes and each
 * Node will be only storing primitive integer values.
 *
 * Provide getter functions for your Node implementation that return:
 *
 *      - A reference to the Node's child Node at a given index.
 *      - The Node's child count.
 *      - The Node's current value.
 *
 * Example:
 *
 *      var leaf1 = new Node(null, 1);
 *      var leaf2 = new Node(null, 2);
 *      var root = new Node([leaf1, leaf2], 3);
 *
 * should give the following data structure
 *
 *           (root){3}
 *           /       \
 *          /         \
 *      (leaf1){1}  (leaf2){2}
 *
 * where `root.getChild(1).getValue()` should give you `2`.
 *
 * Hint: You can use the `Module Pattern`.
 */

/*____________________________________________________________________________*/

(function(context) {
    /*
     * The node collection.
     * Note that it's impossible to reach it outside this module.
     * And we will provide a very restricted access to it through
     * the `context.Node` "facade" below.
     */
    var nodes = {};

    var counter = 0;

    var kNodeKey = 'n';
    var kEmpty = '';

    /**
     * @class {public} Node
     *
     * Creates a simple node.
     *
     * @param {Node[]} children - an array of child nodes.
     * @param {Integer} value - the value of the node.
     */
    context.Node = function(children, value) {
        this.id = [Math.random(), kNodeKey, counter++].join(kEmpty);

        nodes[this.id] = {
            children : (children || []),
            value : value
        };
    }

    /**
     * @function {public} Node.getChildCount
     *
     * Gets the child count of the node.
     *
     * @return the child count.
     */
    context.Node.prototype.getChildCount = function() {
        return nodes[this.id].children.length;
    };

    /**
     * @function {public} Node.getChild
     *
     * Gets the child of the node at a given index.
     *
     * @param {Integer} index - the index to get.
     *
     * @return the child node at the given index.
     */
    context.Node.prototype.getChild = function(index) {
        return nodes[this.id].children[index];
    };

    /**
     * @function {public} Node.getValue
     *
     * Gets the value of the node.
     *
     * @return the `Integer` value of the node.
     */
    context.Node.prototype.getValue = function() {
        return nodes[this.id].value;
    }
}(this));

/*____________________________________________________________________________*/

var leaf1 = new this.Node(null, 1);
var leaf2 = new this.Node(null, 2);
var root = new this.Node([leaf1, leaf2], 3);

console.log(root);
console.log(root.getChildCount());
console.log(root.getValue());
console.log(root.getChild(0));
console.log(root.getChild(0).getChildCount());
console.log(root.getChild(0).getValue());
console.log(root.getChild(1));
console.log(root.getChild(1).getChildCount());
console.log(root.getChild(1).getValue());

/*
Output: ($ /usr/bin/node 001.js)
{ id: '0.35295142116956413n2' }
2
3
{ id: '0.6293376912362874n0' }
0
1
{ id: '0.0803379702847451n1' }
0
2
*/
