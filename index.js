'use strict'

const Tree = require('./BinarySearchTree');

function main() {
    let BST = new Tree();

    // BST.insert(3);
    // BST.insert(1);
    // BST.insert(4);
    // BST.insert(6);
    // BST.insert(9);
    // BST.insert(2);
    // BST.insert(5);
    // BST.insert(7);

    BST.insert('E');
    BST.insert('A');
    BST.insert('S');
    BST.insert('Y');
    BST.insert('Q');
    BST.insert('U');
    BST.insert('E');
    BST.insert('S');
    BST.insert('T');
    BST.insert('I');
    BST.insert('O');
    BST.insert('N');


    console.log(BST);
}

main();