function quickSort(nums, start, end) {
    if (start >= end) {
        return;
    }
    partition = partition(nums, start, end);
    quickSort(nums, start, partition - 1); //到p-1停止
    quickSort(nums, partition + 1, end); //从p+1开始
}

function partition(nums, start, end) {
    let first = start;
    let p = nums[start];
    while (start < end) {
        while (start < end && nums[start] <= p) { // 找到大于p的
            start++;
        }
        while (start < end && nums[end] >= p) { // 找到小于p的
            end--;
        }
        if (start < end) {
            swap(nums, start, end);
        }
    }

    // 判断哨兵与 left 还是 left-1 交换
    let t;
    if (nums[start] < p) {
        swap(nums, first, start);
        t = start;
    } else {
        swap(nums, first, start - 1);
        t = start - 1;
    }
    return t;
}

quickSort([1, 3, 4])