/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function (nums) {
    let temp = new Array(nums.length);
    let tempIndex = new Array(nums.length);
    let numsIndex = Array.from({ length: nums.length }, (_, index) => index);
    let answers = new Array(nums.length).fill(0);


    function mergeAndSort(nums, left, right) {
        if (left >= right) {
            return
        }

        const mid = left + Math.floor((right - left) / 2);
        mergeAndSort(nums, left, mid);
        mergeAndSort(nums, mid + 1, right);

        let i = left;
        let j = mid + 1;
        let count = 0;

        while (i <= mid || j <= right) {
            if (i === mid + 1) {
                tempIndex[count] = numsIndex[j];
                temp[count++] = nums[j++];
            } else if (j === right + 1) { // 右侧部分遍历完，
                answers[numsIndex[i]] += (right - mid);
                tempIndex[count] = numsIndex[i];
                temp[count++] = nums[i++];
            } else if (nums[i] < nums[j]) { // 对于左侧部分nums[i]，一直找到右侧部分第一个大于nums[i]的元素nums[j] => [mid + 1, j - 1] 区间的元素都是小于nums[i]
                answers[numsIndex[i]] += (j - 1 -(mid + 1) + 1); // j - mid -1
                tempIndex[count] = numsIndex[i];
                temp[count++] = nums[i++];
            } else if (nums[i] > nums[j]) {
                tempIndex[count] = numsIndex[j];
                temp[count++] = nums[j++];
            }
        }

        for (let i = 0; i < right - left + 1; i++) {
            nums[left + i] = temp[i];
            numsIndex[left + i] = tempIndex[i];
        }
    }

    mergeAndSort(nums, 0, nums.length - 1);
    return answers;
};
// @lc code=end

countSmaller([5, 2, 6, 1]) // [2,1,1,0]