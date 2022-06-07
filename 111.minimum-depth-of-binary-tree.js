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
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) {
        return 0;
    }

    let ret = Number.MAX_SAFE_INTEGER;
    const getLeaftHeight = function (root, height) {
        if (root.left === null && root.right === null) {
            ret = Math.min(ret, height)
            return;
        }
        root.left && getLeaftHeight(root.left, height + 1);
        root.right && getLeaftHeight(root.right, height + 1);
    }
    getLeaftHeight(root, 1)
    return ret;
};

