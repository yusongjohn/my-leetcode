/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function (root) {
    if (root === null) return null;

    let queue = [root];

    while (queue.length) {
        const nextQueue = []
        for (let i = 0; i < queue.length; i++) {
            const currentNode = queue[i];
            const nextElement = (i + 1) === queue.length ? null : queue[i + 1];
            currentNode.next = nextElement;
            if (currentNode.left) {
                nextQueue.push(currentNode.left);
            }
            if (currentNode.right) {
                nextQueue.push(currentNode.right);
            }
        }
        queue = nextQueue;
    }
    return root;
};

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

const root = new Node(1, new Node(2, null, null), new Node(3, null, null));
connect(root);