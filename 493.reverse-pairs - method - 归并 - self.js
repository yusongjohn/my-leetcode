/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {

    let ret = 0;
    function mergeSort(left, right) {
        if (left === right) return;

        const mid = left + Math.floor((right - left) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        let start = left;
        let end = mid + 1;
        while (start <= mid) {
            while (end <= right && nums[start] > 2 * nums[end]) { // 直到  nums[start] <= 2 * nums[end]，随着start增加，end也要增加
                end++;
            }
            ret += (end - (mid + 1))
            start++;
        }

        const sorted = [];
        let i = left; j = mid + 1;
        while (i <= mid || j <= right) {
            if (i > mid) {
                sorted.push(nums[j++])
            } else if (j > right) {
                sorted.push(nums[i++])
            } else {
                if (nums[i] <= nums[j]) {
                    sorted.push(nums[i++]);
                } else {
                    sorted.push(nums[j++]);
                }
            }
        }
        sorted.forEach((value, index) => {
            nums[left + index] = value;
        });
    }

    mergeSort(0, nums.length - 1);
    return ret;
};

// reversePairs([1, 3, 2, 3, 1]);