/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] Advantage Shuffle
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const PriorityQueue = require('./data-structure/priorityQueue');

var advantageCount = function (nums1, nums2) {
    nums2Elems = [];
    nums2.forEach((item, index) => nums2Elems.push(new Ele(item, index)));

    const priorityQueue = new PriorityQueue(nums2Elems);
    nums1 = nums1.sort((a, b) => b - a); // 递减

    const reuslt = new Array(nums1.length);

    while (priorityQueue.size()) {
        const { val, index } = priorityQueue.dequeue();
        const biggestInNum1 = nums1[0]
        const whoFight = biggestInNum1 > val ? nums1.shift() : nums1.pop();
        reuslt[index] = whoFight;
    }
    return reuslt;
};

function Ele(val, index) {
    this.val = val;
    this.index = index;
}

Ele.prototype.compareTo = function (another) {
    return another.val - this.val;
}
// @lc code=end

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]))

