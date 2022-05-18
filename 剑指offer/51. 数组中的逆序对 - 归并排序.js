/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var reversePairs = function (nums) {
    let sum = 0;
    let temp = [];
    temp = new Array(nums.length);

    // 左闭右闭
    function mergeAndSort(nums, left, right) {
        if (left >= right) {
            return nums;
        }

        let mid = left + Math.floor((right - left) / 2);
        mergeAndSort(nums, left, mid); // [left,mid]
        mergeAndSort(nums, mid + 1, right); // [mid + 1, right]

        // 合并两个有序数组
        let i = left;
        let j = mid + 1;
        let count = 0;
        while (i <= mid || j <= right) {
            // 【左部分】数组遍历完了
            if (i === mid + 1) {
                // 接着把【右部分】数组的元素放入结果中
                temp[count++] = nums[j++];
                // 【右部分】数组遍历完成
            } else if (j === right + 1) {
                // 接着把【左部分】数组的元素放入结果中
                temp[count++] = nums[i++];
            } else if (nums[i] <= nums[j]) {
                temp[count++] = nums[i++];
            } else { // 如果【右部分】数组中的元素小于【左部分】=> 
                temp[count++] = nums[j++];
                sum += (mid - i + 1); // 说明【左部分】索引 >= i 即[i, mid] 的元素都是大于 nums[j]的  // 区别于归并排序的一行代码
            }
        }

        // 一共 right - left + 1个元素
        for (let i = 0; i < right - left + 1; ++i) {
            nums[left + i] = temp[i];
        }
    }

    mergeAndSort(nums, 0, nums.length - 1);
    return sum;
};