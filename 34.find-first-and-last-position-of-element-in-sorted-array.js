/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1]
    }

    const firstPostion = findFirstPostion(nums, target);
    if (firstPostion === -1) {
        return [-1, -1]
    }

    const lastPostion = findLastPostion(nums, target);
    return [firstPostion, lastPostion]
};
// @lc code=end

function findFirstPostion(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) { // => left === right 是停止条件
        const mid = left + Math.floor((right - left) / 2); 
        // mid 一定小于 right

        if (nums[mid] === target) { // 那左侧边界一定在 [left, mid]
            right = mid; // [left,right] => [left, mid ]，mid 一定小于 right 所以不会导致一直循环
        } else if (nums[mid] > target) { // 那左侧边界一定在 [left , mid - 1]
            right = mid - 1;
        } else if (nums[mid] < target) { // 那左侧边界一定在 [mid + 1, right]
            left = mid + 1;
        }
    }

    if (nums[left] === target) {
        return left;
    }
    return -1;
}

// [5,7,7,8,8,10] // [0, 5] => mid = 2, val = 7    => [3,5]
// [8,8,10]       // [3, 5] => mid = 4 ,val = 8;   => [3,4]
// [8,8]          // [3, 4] => mid = 3, val = 8    => [3,3]
// [8]            // left === right => 退出

function findLastPostion(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) { // => left === right 是停止条件，最终的值left和right可能的值是什么？[0, nums.length - 1]
        // const mid = left + Math.floor((right - left) / 2); 
        // mid 可能等于left（一定会出现right - left = 1的时候，此时Math.floor向下取整为0），因此走下面第一个条件分支时，则 [left, right] => [mid, right] ,mid = left，则无限循环了
        // [4, 5] => mid = 5 && nums[4] === target => [4,5] => .....
        // 需要改变 生成mid的方式，避免 mid 可以等于 left

        const mid = left + Math.floor((right - left + 1) / 2); // 由于进入这里right - left >= 1，所以在这里加个1，可以保证mid一定大于left
        
        if (nums[mid] === target) { // 那右侧边界一定在 [mid, right]
            left = mid;
        } else if (nums[mid] < target) { // 那右侧边界一定在 [mid + 1, right]
            left = mid + 1;
        } else if (nums[mid] > target) { // 那右侧边界一定在 [left, mid - 1]
            right = mid - 1;
        }
    }

    if (nums[left] === target) {
        return left;
    }
    return -1;
}

// [5,7,7,8,8,10] // [0, 5] => mid = 2, val = 7    => [3,5]
// [8,8,10]       // [3, 5] => mid = 4 ,val = 8;   => [4,5]
// [8,10]         // [4, 5] => mid = 4, val = 8    => [4,4]
// [8]            // left === right => 退出

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))



