/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) {
        return nums.length
    }

    let preEle = nums[0];
    let validCount = 1;
    for (let i = 1; i < nums.length; i++) {
        const currentEle = nums[i];
        if (currentEle !== preEle) {
            nums[validCount++] = currentEle;
            preEle = currentEle;
        }
        // else {
        //     nums[i] = null;
        // }
    }
    return validCount;
};