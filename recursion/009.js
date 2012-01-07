/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * In the game of Towers of Hanoi, you have 3 rods and N disks of different
 * sizes which can slide onto any tower. The puzzle starts with disks sorted in
 * ascending order of size from top to bottom (each disk sits on top of an even
 * larger disk) with the following constraints.
 * 1. Only one disk can be moved at a time.
 * 2. A disk is slid off the top of one rod onto the next rod.
 * 3. A disk can only be placed on top of a larger disk.
 *
 * Write a program to move the disks from the first rod to the last.
 */

/*____________________________________________________________________________*/

/**
 * @class {public} Tower
 *
 * A data structure for a Hanoi tower.
 */

 /**
  * @constructor Tower.Tower
  *
  * Creates a new tower.
  *
  * @param {Integer} i - the index of the tower.
  */
function Tower(i) {
    this.disks = [];
    this.index = i;
}

var tp = Tower.prototype;

/**
 * @function {public} Tower.add
 *
 * Add a disk to the tower.
 *
 * @param {Integer} d - the size of the disk.
 */
tp.add = function(d) {
    if (this.disks.length === 0 && this.disks[0] <= d) {
        return;
    }

    this.disks.push(d);
};

/**
 * @function {public} Tower.moveTopTo
 *
 * Moves the top disk of this tower, to another tower.
 *
 * @param {Tower} anotherTower - the tower to move to.
 */
tp.moveTopTo = function(anotherTower) {
    var top = this.disks.pop();
    anotherTower.add(top);

    console.log([
        'Moved disk ', top, ' from ', this.index, ' to ',  anotherTower.index
    ].join(''));
};

/**
 * @function {public} Tower.print
 *
 * Prints the contents of the tower.
 */
tp.print = function() {
    console.log(['Contents of tower', this.index].join(''));

    var i = 0;

    var buffer = [];

    for (i = this.disks.length - 1; i >= 0; i--) {
        buffer.push(' ');
        buffer.push(this.disks[i]);
    }

    console.log(buffer.join(''));
}

/**
 * @function {public} Tower.moveDisks
 *
 * Moves n disks from ths tower to destination tower using a buffer tower.
 *
 * @param {Integer} n - the number of disks to move.
 * @param {Tower} destination - the destination `Tower` to move to.
 * @param {Tower} buffer - intermediate buffer `Tower`.
 */
tp.moveDisks = function(n, destination, buffer) {
    if (n === 0) {
        return;
    }

    this.moveDisks(n - 1, buffer, destination);
    this.moveTopTo(destination);
    buffer.moveDisks(n-1, destination, this);
};

(function main() {
    var n = 5;
    var towers = [];
    var i = 0;

    for (i = 0; i < 3; i++) {
        towers[i] = new Tower(i);
    }

    for (i = n -1; i >= 0; i--) {
        towers[0].add(i);
    }

    towers[0].moveDisks(n, towers[2], towers[1]);

    towers[2].print();
}());

/*
Output: ($ /usr/bin/node 009.js)
Moved disk 0 from 0 to 2
Moved disk 1 from 0 to 1
Moved disk 0 from 2 to 1
Moved disk 2 from 0 to 2
Moved disk 0 from 1 to 0
Moved disk 1 from 1 to 2
Moved disk 0 from 0 to 2
Moved disk 3 from 0 to 1
Moved disk 0 from 2 to 1
Moved disk 1 from 2 to 0
Moved disk 0 from 1 to 0
Moved disk 2 from 2 to 1
Moved disk 0 from 0 to 2
Moved disk 1 from 0 to 1
Moved disk 0 from 2 to 1
Moved disk 4 from 0 to 2
Moved disk 0 from 1 to 0
Moved disk 1 from 1 to 2
Moved disk 0 from 0 to 2
Moved disk 2 from 1 to 0
Moved disk 0 from 2 to 1
Moved disk 1 from 2 to 0
Moved disk 0 from 1 to 0
Moved disk 3 from 1 to 2
Moved disk 0 from 0 to 2
Moved disk 1 from 0 to 1
Moved disk 0 from 2 to 1
Moved disk 2 from 0 to 2
Moved disk 0 from 1 to 0
Moved disk 1 from 1 to 2
Moved disk 0 from 0 to 2
Contents of tower2
 0 1 2 3 4
*/
