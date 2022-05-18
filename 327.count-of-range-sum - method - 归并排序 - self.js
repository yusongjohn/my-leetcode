var countRangeSum = function (nums, lower, upper) {
    let sum = 0;
    let temp = [];
    temp = new Array(nums.length);

    // 左闭右闭
    function mergeAndSort(prefixSum, left, right) {
        if (left === right) {
            if (prefixSum[left] >= lower && prefixSum[left] <= upper) return 1;
            return 0;
        }

        let mid = left + Math.floor((right - left) / 2);
        const leftNum = mergeAndSort(prefixSum, left, mid); // [left,mid]
        const rightNum = mergeAndSort(prefixSum, mid + 1, right); // [mid + 1, right]
        let ret = leftNum + rightNum;

        let _tempL = mid + 1;
        let _tempR = mid + 1;
        for (let start = left; start <= mid; start++) {
            // 从左往右找到第一个 prefixSum[_tempL] - prefixSum[start] >= lower
            while (_tempL <= right && prefixSum[_tempL] - prefixSum[start] < lower) {
                _tempL++
            }
            // 上面循环结束后，说明 prefixSum[_tempL] - prefixSum[start] >= lower；
            // 那 prefixSum[_tempL,...,right] - prefixSum[start] >= lower

            // 从左往右找到第一个 prefixSum[_tempR] - prefixSum[start] >= lower
            while (_tempR <= right && prefixSum[_tempR] - prefixSum[start] <= upper) {
                _tempR++
            }
            // 上面循环结束后，说明 prefixSum[_tempR] - prefixSum[start] <= upper
            // 那 prefixSum[0,...,_tempR] - prefixSum[start] <= upper
            if (_tempR >= _tempL) { // 确保有重叠区域，有效结果
                ret += (_tempR - _tempL)
            }
        }


        // 合并两个有序数组
        let i = left;
        let j = mid + 1;
        let count = 0;
        while (i <= mid || j <= right) {
            // 【左部分】数组遍历完了
            if (i === mid + 1) {
                // 接着把【右部分】数组的元素放入结果中
                temp[count++] = prefixSum[j++];
                // 【右部分】数组遍历完成
            } else if (j === right + 1) {
                // 接着把【左部分】数组的元素放入结果中
                temp[count++] = prefixSum[i++];
            } else if (prefixSum[i] <= prefixSum[j]) {
                temp[count++] = prefixSum[i++];
            } else { // 如果【右部分】数组中的元素小于【左部分】=> 
                temp[count++] = prefixSum[j++];
            }
        }

        // 一共 right - left + 1个元素
        for (let i = 0; i < right - left + 1; ++i) {
            prefixSum[left + i] = temp[i];
        }
        return ret;
    }


    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }
    return mergeAndSort(prefixSum, 0, nums.length - 1);
};