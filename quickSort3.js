function partion(nums, low, high) {
    let pivot = nums[low];
    while (low < high) {
        while (low < high && nums[high] >= pivot) {
            --high;
        }

        nums[low] = nums[high]

        while (low < high && nums[low] <= pivot) {
            low++;
        }

        nums[high] = nums[low];
    }

    nums[low] = pivot;
    return low;
}

function quickSort(nums, low, high) {
    if (low < high) {
        let pivotPos = partion(nums, low, high);
        quickSort(nums, low, pivotPos - 1);
        quickSort(nums, pivotPos + 1, high);
    }
}

const nums = [4, 3, 1, 4, 5, 7, 8, 8, 1, 5, 34, 3, 2];
quickSort(nums, 0, nums.length - 1);
console.log(nums);