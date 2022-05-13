/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0], null, null)
    }

    const maxNum = Math.max(...nums);
    const maxNumIndex = nums.findIndex((value) => value === maxNum);
    const parentNode = new TreeNode(maxNum);
    parentNode.left = recur(nums.slice(0, maxNumIndex))
    parentNode.right = recur(nums.slice(maxNumIndex + 1))
    return parentNode;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])