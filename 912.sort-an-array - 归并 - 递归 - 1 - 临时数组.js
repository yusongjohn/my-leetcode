/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }

    let mid = Math.floor((nums.length - 1) / 2);
    const leftPart = sortArray(nums.slice(0, mid + 1));
    const rightPart = sortArray(nums.slice(mid + 1, nums.length));

    // 合并两个有序数组
    let i = 0;
    let j = 0;
    const result = [];
    while (i < leftPart.length || j < rightPart.length) {

        // 【左】部分数组遍历完了
        if (i === leftPart.length) {
            // 接着把【右】部分数组的元素放入结果中
            result.push(rightPart[j++])

        // 【右】部分数组遍历完成
        } else if (j === rightPart.length) {
            // 接着把【左】部分数组的元素放入结果中
            result.push(leftPart[i++])
            
        } else if (leftPart[i] < rightPart[j]) {
            result.push(leftPart)
            i++;
        } else {
            result.push(rightPart[j])
            j++;
        }
    }

    return result;
};

sortArray([5, 2, 3, 1]);