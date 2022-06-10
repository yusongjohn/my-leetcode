var rob = function (nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    } else if (length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    // 分两种情况
    // 抢第一间：[0,n-2]
    // 抢最后一见：[1,n-1]
    return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {
    let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        const temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
}