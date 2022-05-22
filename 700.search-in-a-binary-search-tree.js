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
var searchBST = function (root, val) {
    while (true) {
        if (!root) {
            break
        }
        if (root.val === val) {
            break;
        } else if (root.val < val) {
            root = root.right;
        } else if (root.val > val) {
            root = root.left;
        }
    }
    return root;
};