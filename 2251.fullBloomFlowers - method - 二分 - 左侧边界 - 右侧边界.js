// https://www.notion.so/2251-b493ff7d40b2412f8145d8a21f7113a3
/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, persons) {
        const openDays = [];
        const endDays = [];

        flowers.forEach(([start, end]) => {
                openDays.push(start);
                endDays.push(end); // end + 1 才凋谢，当天还是可以看到的
        });

        const sortHelper = (a, b) => a - b;
        openDays.sort(sortHelper);
        endDays.sort(sortHelper);

        // 理解1 - 左侧边界
        // return persons.map(currentDay => {
        //         const opendFlowers = leftBorder(openDays, currentDay + 1);
        //         const closedFlowers = leftBorder(endDays, currentDay);
        //         return opendFlowers - closedFlowers;
        // })

        // 理解1 - 右侧边界
        return persons.map(currentDay => {
                const opendFlowers = rightBorder(openDays, currentDay);
                const closedFlowers = rightBorder(endDays, currentDay - 1);
                return opendFlowers - closedFlowers;
        })
};

// 盛开
// [1, 2, 3, 3, 4, 4, 5, 5, 7, 7], target = 6 ；数组的每一项对应一朵花开放
// return 8 (对应数组索引)  => [1, 2, 3, 3, 4, 4, 5, 5 ] 共 8 朵花盛开

// 凋谢
// [1, 2, 3, 3, 4, 4, 5, 5, 7, 7], target = 5 ；数组的每一项对应一朵花凋谢
// return 6 (对应数组索引)  => [ 1, 2, 3, 3, 4, 4 ] 共 6 多花凋谢
function leftBorder(nums, target) { // 注意二分的前提是数组是单调的
        let left = 0, right = nums.length - 1;

        while (left < right) {
                const mid = left + Math.floor((right - left) / 2);
                if (nums[mid] === target) { // 继续往左
                        right = mid;
                } else if (nums[mid] > target) {
                        right = mid;
                } else if (nums[mid] < target) {
                        left = mid + 1;
                }
        }

        if (nums[left] >= target) {
                return left
        }

        return left + 1;
}


// [1, 2, 3, 3, 4, 4, 5, 5, 7, 7], target = 5
function rightBorder(nums, target) {
        let left = 0, right = nums.length - 1;

        while (left < right) {
                // 注意 right - left + 1 为的是mid > left，否则mid可能等于left，那么可能会死循环（走下面的第一个和第二个if)
                const mid = left + Math.floor((right - left + 1) / 2);
                if (nums[mid] === target) { // 继续往左
                        left = mid;
                } else if (nums[mid] < target) {
                        left = mid;
                } else if (nums[mid] > target) {
                        right = mid - 1;
                }
        }

        if (nums[left] <= target) {
                return left + 1
        }

        return left;
}

fullBloomFlowers([[1, 10], [3, 10], [4, 11], [9, 11], [10, 13]], [11])