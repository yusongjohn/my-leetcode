/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    const newNode = new TreeNode(val, null, null);
    if (root === null) {
        return newNode
    }

    const head = root;
    while (true) {
        if (root.val < val) {
            if (root.right === null) {
                root.right = newNode
                break
            }
            root = root.right
        } else if (root.val > val) {
            if (root.left === null) {
                root.left = newNode
                break
            }
            root = root.left
        }
    }

    return head;
};