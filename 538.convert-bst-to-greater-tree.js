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
 * @return {TreeNode}
 */

// [1,2,3,4,5,6,7,8] 与前缀和对应的 后缀和，哈哈
var convertBST = function (root) {
    let sum = 0;
    function dfs(root) {
        if (!root) {
            return;
        }

        dfs(root.right);
        sum += root.val
        root.val = sum;
        dfs(root.left);
    }
    dfs(root);
    return root;
};

