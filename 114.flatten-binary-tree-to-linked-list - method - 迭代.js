var flatten = function (root) {
    let curr = root;
    while (curr !== null) {
        if (curr.left !== null) {
            const next = curr.left;
            let predecessor = next;
            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            predecessor.right = curr.right;
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }
};

const { TreeNode } = require('./utils')
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(4,
                new TreeNode(5, new TreeNode(6)),
                null),
            null),
        null),
    null)
flatten(root);