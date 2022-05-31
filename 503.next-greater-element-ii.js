var nextGreaterElements = function (nums) {
    var stack = [];
    var result = new Array(nums.length).fill(-1);
    for (var i = 0; i < 2 * nums.length; i++) {
        var realIndex = i % nums.length;
        var currentNum = nums[realIndex];
        while (stack.length > 0 && currentNum > nums[stack[stack.length - 1]]) {
            result[stack[stack.length - 1]] = currentNum;
            stack.pop();
        }
        stack.push(realIndex);
    }

    return result;
};