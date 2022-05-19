/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 一个节点是不是祖先只有两种情况
// 1. p, q 分别在当前节点的两侧
// 2. 排除第一种情况的时候，p 或者 q 就是当前节点时，此时找到了
// 如果是 BST 的情况，很容易判断是不是满足上述条件
var lowestCommonAncestor = function (root, p, q) {
    if ((p.val < root.val && q.val > root.val) || (q.val < root.val && p.val > root.val)) {
        return root;
    } else if ((p === root || q === root)) {
        return root
    } else { // p和q，在左分支或者有分支中
        if (p.val < root.val) {
            return lowestCommonAncestor(root.left, p, q)
        } else {
            return lowestCommonAncestor(root.right, p, q)
        }
    }
};