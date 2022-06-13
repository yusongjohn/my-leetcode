/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) return [];

    const ret = []
    let head = nums[0];
    let pre = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - pre <= 1) {
            pre = nums[i];
            continue;
        } else {
            if (head === nums[i - 1]) {
                ret.push(`${head}`)
            } else {
                ret.push(`${head}->${nums[i - 1]}`)
            }
            head = nums[i]
            pre = nums[i];
        }
    }

    if (head === nums[nums.length - 1]) {
        ret.push(`${head}`)
    } else {
        ret.push(`${head}->${nums[nums.length - 1]}`)
    }
    return ret;
};