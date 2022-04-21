// let quickSort = (arr) => {
//     quick(arr, 0, arr.length - 1)
// }

// let quick = (arr, left, right) => {
//     let index
//     if (left < right) {
//         // 划分数组
//         index = partition(arr, left, right)
//         if (left < index - 1) {
//             quick(arr, left, index - 1)
//         }
//         if (index < right) {
//             quick(arr, index, right)
//         }
//     }
// }

// // 一次快排
// let partition = (arr, left, right) => {
//     // 取中间项为基准
//     let datum = arr[Math.floor(Math.random() * (right - left + 1)) + left];
//     let i = left;
//     let j = right;
//     // 开始调整
//     while (i <= j) {

//         // 左指针右移
//         while (arr[i] < datum) i++;

//         // 右指针左移
//         while (arr[j] > datum) j--;

//         // 交换
//         if (i <= j) {
//             swap(arr, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// // 交换
// let swap = (arr, i, j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

function sortArray(nums) {
    randomizedQuicksort(nums, 0, nums.length - 1);
    return nums;
}

function randomizedQuicksort(nums, left, right) {
    if (left < right) {
        let pos = randomizedPartition(nums, left, right);
        randomizedQuicksort(nums, left, pos - 1);
        randomizedQuicksort(nums, pos + 1, right);
    }
}

function randomizedPartition(nums, left, right) {
    let i = Math.floor(Math.random() * (right - left + 1)) + left; // 随机选一个作为我们的主元
    swap(nums, right, i);
    return partition(nums, left, right);
}

function partition(nums, left, right) {
    let pivot = nums[right];
    let minIndex = left - 1; // 该索引左侧都是大于pivot的

    for (let j = left; j <= right - 1; ++j) {
        // minIndex + 1 指向的值大于pivot，如果发现有小于等于pivot值的，则交换
        if (nums[j] <= pivot) { // 小于也行，区别在于等于pivot的值都在左侧还是都在右侧
            minIndex = minIndex + 1;
            swap(nums, minIndex, j);
        }
        // 实际这里被切分为三个部分： 
        // 1. <= minIndex : 小于等于pivot部分
        // 2. mindex < i <= j : 大于pivot部分
        // 3. > j : 未处理
    }

    // minIndex = -1 、 right - 1 、中间索引
    swap(nums, minIndex + 1, right);
    return minIndex + 1;
}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

