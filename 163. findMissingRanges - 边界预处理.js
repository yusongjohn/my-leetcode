/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    const ret = [];

    nums.unshift(lower - 1);
    nums.push(upper + 1)
    let preNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const currentNum = nums[i];
        if (currentNum - preNum === 2) {
            ret.push(preNum + 1 + '') // 或者 ret.push(currentnum - 1)
        } else if (currentNum - preNum > 2) {
            ret.push([preNum + 1, currentNum - 1].join('->'))
        }
        preNum = currentNum;
    }
    return ret;
};

console.log(findMissingRanges([], -3, -1))
