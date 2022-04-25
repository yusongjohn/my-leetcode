/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const validCount = removeElement(nums, 0);
    for (let i = validCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};
// @lc code=end 

var removeElement = function (nums, val) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[slow++] = nums[i];
        }
    }
    return slow
};