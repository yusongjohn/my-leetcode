/**
* @param {number[]} w
*/
var Solution = function (w) {
    let prefixSum = [w[0]];

    // 构造一个最小前缀和
    for (let i = 1; i < w.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + w[i];
    }

    this.prefixSum = prefixSum;
    this.total = prefixSum[w.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const target = Math.floor(Math.random() * this.total) // Math.floor;  // Math.random() => [0, 1)
    // 范围 0 <= target < total 的整数
    // 比如 w = [3, 1, 2, 4], 那 [0 - 3) 即 0, 1, 2 命中第一部分

    const nums = this.prefixSum;
    let left = 0;
    let right = nums.length - 1;
    const binarySearch = function () {
        while (left < right) {
            const midIndex = left + Math.floor((right - left) / 2); // left <= mid < right (;right < left)
            if (nums[midIndex] === target) {
                return midIndex + 1; // 因为权重为1，prefixSum没有重复元素 // TODO 假设权重为0，该如何处理
            } else if (nums[midIndex] < target) {
                left = midIndex + 1;
            } else if (nums[midIndex] > target) {
                right = midIndex - 1;
            }
        }

        if (target < nums[left]) {
            return left
        }

        return left + 1;
    }
    const result = binarySearch();
    console.log(result);
    return result;
};
 