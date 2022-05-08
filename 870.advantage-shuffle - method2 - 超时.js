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

var advantageCount = function (nums1, nums2) {

    const nums2InfoMap = {};
    nums2.forEach((val, index) => {
        if (!nums2InfoMap[val]) {
            nums2InfoMap[val] = []
        }
        nums2InfoMap[val].push(index);
    })

    const nums2Clone = [...nums2];

    const sortHelper = (a, b) => b - a
    nums2Clone.sort(sortHelper); // 递减
    nums1 = nums1.sort(sortHelper); // 递减

    const reuslt = new Array(nums1.length);

    for (let i = 0; i < nums2Clone.length; i++) {
        const val = nums2Clone[i];
        const index = nums2InfoMap[val].shift();

        const biggestInNum1 = nums1[0]
        const whoFight = biggestInNum1 > val ? nums1.shift() : nums1.pop();
        reuslt[index] = whoFight;
    }
    return reuslt;
};

// console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11])) // [ 2, 11, 7, 15 ]
// console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])) // [24,32,8,12]
console.log(advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2])) // [2,0,2,1,4]
