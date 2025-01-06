const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    const insertNode = (node, newData) => {
      if (newData < node.data) {
        if (node.left) {
          insertNode(node.left, newData);
        } else {
          node.left = new Node(newData);
        }
      } else {
        if (node.right) {
          insertNode(node.right, newData);
        } else {
          node.right = new Node(newData);
        }
      }
    };

    insertNode(this.root, data);
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // Node to be deleted found
        if (!node.left && !node.right) {
          // Node has no children
          return null;
        } else if (!node.left) {
          // Node has only right child
          return node.right;
        } else if (!node.right) {
          // Node has only left child
          return node.left;
        } else {
          // Node has two children
          let minNode = node.right;
          while (minNode.left) {
            minNode = minNode.left;
          }
          node.data = minNode.data;
          node.right = removeNode(node.right, minNode.data);
          return node;
        }
      }
    };

    this.root = removeNode(this.root, data);
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};