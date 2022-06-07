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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let ret = true;
    const getHeight = function (root) {
        if (root === null) {
            return 0;
        }
        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            ret = false;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    getHeight(root);
    return ret;
};
