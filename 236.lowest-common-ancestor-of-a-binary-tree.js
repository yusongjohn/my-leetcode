/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
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

// 1. 如果p和q分别在当前节点的两个分支上，当前节点就是
// 2. 如果当前节点是其中一个(p || q)，并且另个节点在其左分支或者右分支上，当前节点就是

// 给每一个节点
var lowestCommonAncestor = function(root, p, q) {
    
};
// @lc code=end

