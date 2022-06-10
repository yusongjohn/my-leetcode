/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    if (!nums.length) {
        if (upper <= lower) {
            return [lower + '']
        } else {
            return [[lower, upper].join('->')]
        }
    }
    const ret = [];
    // 处理下边界
    const firstNum = nums[0]
    if (firstNum - lower < 1) { // 即 <= 0;

    } else if (firstNum - lower === 1) {
        ret.push(lower + '')
    } else if (firstNum - lower > 1) {
        ret.push([lower, firstNum - 1].join('->'))
    }

    let preNum = firstNum;
    for (let i = 1; i < nums.length; i++) {
        const currentNum = nums[i];
        if (currentNum <= preNum + 1) {

        } else if (currentNum - preNum === 2) {
            ret.push(preNum + 1 + '') // 或者 ret.push(currentnum - 1)
        } else if (currentNum - preNum > 2) {
            ret.push([preNum + 1, currentNum - 1].join('->'))
        }
        preNum = currentNum;
    }

    // 处理上边界
    const lastNum = nums[nums.length - 1];
    if (upper - lastNum < 1) { // 即 <= 0;

    } else if (upper - lastNum === 1) {
        ret.push(upper + '');
    } else if (upper - lastNum > 1) {
        ret.push([lastNum + 1, upper].join('->'))
    }
    return ret;
};

console.log(findMissingRanges([], -3, -1))
