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
    return recur(preorder, inorder, [0, preorder.length], [0, inorder.length]);
};

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
function recur(preorder, inorder, [preStartIndex, preEndIndex], [inStartIndex, inEndIndex]) {
    const count = preEndIndex - preStartIndex
    if (!count) return null;

    if (count === 1) return new TreeNode(preorder[preStartIndex], null, null);

    const parentNode = new TreeNode(preorder[preStartIndex]);

    // 从inorder 里面找 preorder[preStartIndex]
    let splitIndexInOrder // 当前元素在inorder中的位置
    for (let i = inStartIndex; i < inEndIndex; i++) {
        if (inorder[i] === parentNode.val) {
            splitIndexInOrder = i;
            break;
        }
    }

    const leftPartLength = splitIndexInOrder - inStartIndex;
    // 左侧的preorder \ inorder
    const leftPartPreOrder = [preStartIndex + 1, preStartIndex + leftPartLength + 1];
    const rightPartPreOrder = [preStartIndex + leftPartLength + 1, preEndIndex];

    const leftPartInOrder = [inStartIndex, splitIndexInOrder];
    const rightPartInOrder = [splitIndexInOrder + 1, inEndIndex];

    parentNode.left = recur(preorder, inorder, leftPartPreOrder, leftPartInOrder);
    parentNode.right = recur(preorder, inorder, rightPartPreOrder, rightPartInOrder);
    return parentNode;
}

// @lc code=end

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7]
buildTree(preorder, inorder);