/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    // x为和的最大值
    let leftSum = Math.max(...nums); // 最小的最大和
    let rightSum = nums.reduce((sum, currentvalue) => sum + currentvalue, 0);

    while (leftSum < rightSum) {
        const midSum = leftSum + Math.floor((rightSum - leftSum) / 2);
        const midValue = getMinSplitNums(nums, midSum);

        if (midValue === m) { // 可以满足
            rightSum = midSum - 1;
        } else if (midValue < m) { // 可以满足
            rightSum = midSum - 1;
        } else if (midValue > m) {
            leftSum = midSum + 1;
        }
    }

    if (getMinSplitNums(nums, leftSum) <= m) {
        return leftSum;
    }

    return leftSum + 1;
};

// 贪心地模拟分割的过程，计算出来的 minSplitNums 尽可能的小，minSplitNums <= m 则满足条件，继续收缩
// 这个是一个单调（减）函数
function getMinSplitNums(nums, maxSum) {
    let minSplitNums = 0;
    let i = 0;
    while (i < nums.length) {
        let sum = 0;
        while (i < nums.length) {
            sum += nums[i];
            if (sum > maxSum) {
                break
            }
            i++;
        }
        minSplitNums++;
    }
    return minSplitNums;
}

// console.log(splitArray([7, 2, 5, 10, 8], 2));
console.log(splitArray([1, 4, 4], 3))