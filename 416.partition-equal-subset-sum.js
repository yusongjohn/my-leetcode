/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((val, sum) => sum + val, 0);
    if ((sum & 1) === 1) return false;

    const target = sum / 2;
    const dp = Array.from({ length: nums.length }, () => new Array(target + 1).fill(false));

    if (nums[0] <= target) {
        dp[0][nums[0]] = true;
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {

            if (nums[i] === j) {
                dp[i][j] = true;
                continue;
            }

            if (nums[i] < j) {
                dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - nums[i]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[nums.length - 1][target]
};

console.log(canPartition([1, 3, 4, 4]))
console.log(canPartition([1, 1]))
console.log(canPartition([3, 3, 3, 4, 5]))