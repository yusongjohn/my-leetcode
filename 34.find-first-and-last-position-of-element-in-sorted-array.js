/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }

    const leftBorderIndex = findFirstPos(nums, target);
    if (leftBorderIndex === -1) {
        return [-1, -1]
    }

    return [leftBorderIndex, findLastPos(nums, target)];
};

// 左侧边界
function findFirstPosV1(nums, target) {
    let left = 0, right = nums.length; // 左闭 右开区间 [left, right) ，如果 left === right则为空区间

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }

    // target 比所有数都大
    if (left == nums.length) return -1;
    // 类似之前算法的处理方式
    return nums[left] == target ? left : -1;
}

// 左侧边界
function findFirstPosV2(nums, target) {
    let left = 0, right = nums.length - 1; // 左闭 右闭区间 [left, right]

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] === target) {
            right = mid - 1;
        }
    }

    // target 比所有数都大
    if (left == nums.length) return -1;
    // 类似之前算法的处理方式
    return nums[left] == target ? left : -1;
}

// 右侧边界
function findLastPos(nums) {

}