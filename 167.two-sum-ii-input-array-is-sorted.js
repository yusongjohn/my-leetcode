/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let sum = 0;
    while (left <= right) {
        sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }
};