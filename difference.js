
// 差分數組
// leetcode: 題目： 370. 区间加法✨、1109. 航班预订统计、1094. 拼车
function Difference(nums) {
    this.nums = nums;
    this.diff = this.diff();
}

Difference.prototype.diff = function () {
    if (!this.nums.length) {
        return [];
    }

    const diff = [nums[0]];
    for (let i = 1; i < this.nums.length; i++) {
        diff[i] = this.nums[i] - this.nums[i - 1];
    }
    return diff;
}

Difference.prototype.increment = function (startIndex, endIndex, val) {
    this.diff[startIndex] += val;

    if ((endIndex + 1) < this.diff.length) {
        this.diff[endIndex + 1] -= val
    }
}

Difference.prototype.getResult = function () {
    let res = [];
    // 根据差分数组构造结果数组
    res[0] = diff[0];
    for (let i = 1; i < diff.length; i++) {
        res[i] = res[i - 1] + diff[i];
    }
    return res;
}