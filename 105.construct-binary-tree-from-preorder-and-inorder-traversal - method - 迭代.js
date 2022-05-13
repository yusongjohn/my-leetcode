/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const { TreeNode } = require('./utils')

var buildTree = function(preorder, inorder) {

};

// @lc code=end

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7]
buildTree(preorder, inorder);