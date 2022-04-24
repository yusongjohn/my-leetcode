/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    const originalNums = new Array(n).fill(0);
    const difference = new Difference(originalNums);
    // booking 中的索引从 1 开始
    bookings.forEach(booking => difference.increment(booking[0] - 1, booking[1] - 1, booking[2]));
    return difference.getResult()
};

function Difference(nums) {
    this.nums = nums;
    this.diff = this.diff();
}

Difference.prototype.diff = function () {
    if (!this.nums.length) {
        return [];
    }

    const diff = [0];
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
    res[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
        res[i] = res[i - 1] + this.diff[i];
    }
    return res;
}

corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)