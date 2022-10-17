const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.Root = null;
	}

	root() {
		return this.Root;
	}

	add(data) {
		this.Root = addNode(this.Root, data)
		function addNode(node, data) {
			if (node === null) {
				return new Node(data);
			}
			else if (node.data === data) {
				return node;
			}
			else if (node.data < data) {
				node.right = addNode(node.right, data);
				return node;
			} else {
				node.left = addNode(node.left, data);
				return node;
			}
		}

	}


	has(data) {
		return hasBoolean(this.Root, data)

		function hasBoolean(node, data) {
			if (!node) {
				return false
			}
			else if (node.data === data) {
				return true
			}
			else if (data < node.data) {
				return hasBoolean(node.left, data)
			}
			else {
				return hasBoolean(node.right, data)
			}
		}
	}

	find(data) {
		return findBoolean(this.Root, data)

		function findBoolean(node, data) {
			if (!node) {
				return null;
			}
			else if (node.data === data) {
				return node;
			}
			else if (data < node.data) {
				return findBoolean(node.left, data)
			}
			else {
				return findBoolean(node.right, data)
			}
		}
	}

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
