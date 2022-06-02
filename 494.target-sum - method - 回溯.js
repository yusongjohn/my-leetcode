/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let ret = 0;
    function backTrack(sum, i) {
        if (i === nums.length) {
            if (sum === target) {
                ret++;
            }
            return
        }

        sum += nums[i];
        backTrack(sum, i + 1);
        sum -= nums[i];


        sum -= nums[i];
        backTrack(sum, i + 1);
        sum += nums[i];
    }
    backTrack(0, 0)
    return ret;
};