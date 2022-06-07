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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false;
    }

    let ret = false;
    const getRootLeafPathSum = function (root, sum) {
        if (root.left === null && root.right === null) {
            if ((sum - root.val) === 0) {
                ret = true;
            }
            return;
        }

        root.left && getRootLeafPathSum(root.left, sum - root.val);
        root.right && getRootLeafPathSum(root.right, sum - root.val);
    }
    getRootLeafPathSum(root, targetSum);
    return ret;
};