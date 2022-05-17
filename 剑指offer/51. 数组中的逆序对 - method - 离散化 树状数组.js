/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    const n = nums.length;
    const temp = [...nums].sort((a, b) => a - b);

    // 离散化
    for (let i = 0; i < n; i++) {
        nums[i] = binarySearch(temp, nums[i]) + 1
    }
    // nums = [4, 2, 3, 1]
    const bit = new Bit(n);
    let answers = 0;
    for (let i = n - 1; i >= 0; i--) {
        answers += bit.query(nums[i] - 1);
        bit.update(nums[i]);
    }
    return answers;
};

const binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    return -1;
}

// Bit ：binary indexed trees
function Bit(n) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0)
}

Bit.prototype.lowbit = function (x) {
    return x & (-x)
}

Bit.prototype.query = function (x) {
    let sum = 0;
    while (x != 0) {
        sum += this.tree[x];
        x -= this.lowbit(x)
    }
    return sum;
}

Bit.prototype.update = function (x) {
    while (x <= this.n) {
        this.tree[x]+;
        x += this.lowbit(x);
    }
}

reversePairs([7, 5, 6, 4])