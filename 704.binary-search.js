/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};

function binarySearch(nums, target, left, right) {
    if (left > right) {
        return -1;
    }

    if (left === right) {
        return nums[left] === target ? left : -1;
    }

    const mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
        return mid;
    } else if (target > nums[mid]) {
        return binarySearch(nums, target, mid + 1, right)
    }
    return binarySearch(nums, target, left, mid - 1);
}

// search([-1, 0, 3, 5, 9, 12], -2)