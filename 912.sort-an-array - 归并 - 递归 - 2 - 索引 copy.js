/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
    const tempIndex = new Array(nums.length);
    const numsIndex = Array.from({ length: nums.length }, (_, index) => index);

    // 左闭右闭
    function mergeAndSort(numsIndex, left, right) {
        if (left >= right) {
            return;
        }

        let mid = left + Math.floor((right - left) / 2);
        mergeAndSort(numsIndex, left, mid); // [left,mid]
        mergeAndSort(numsIndex, mid + 1, right); // [mid + 1, right]

        // 合并两个有序数组
        let i = left;
        let j = mid + 1;
        let count = 0;
        while (i <= mid || j <= right) {
            // 【左部分】数组遍历完了
            if (i === mid + 1) {
                // 接着把【右部分】数组的元素放入结果中
                tempIndex[count++] = numsIndex[j++];
                // 【右部分】数组遍历完成
            } else if (j === right + 1) {
                // 接着把【左部分】数组的元素放入结果中
                tempIndex[count++] = numsIndex[i++];
            } else if (nums[numsIndex[i]] < nums[numsIndex[j]]) {
                tempIndex[count++] = numsIndex[i++];
            } else { // 如果【右部分】数组中的元素小于【左部分】=> 
                tempIndex[count++] = numsIndex[j++];
            }
        }

        // 一共 right - left + 1个元素
        for (let i = 0; i < right - left + 1; ++i) {
            numsIndex[left + i] = tempIndex[i];
        }
    }

    mergeAndSort(numsIndex, 0, numsIndex.length - 1);

    return numsIndex;
};

// sortArray([5, 2, 3, 1]);