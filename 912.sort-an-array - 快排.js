function sort(nums, left, right) {
    if (left < right) {
        var mid = partition(nums, left, right);
        sort(nums, left, mid - 1);
        sort(nums, mid + 1, right);
    }
}

function partition(nums, left, right) {
    var base = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= base) {
            right--;
        }
        nums[left] = nums[right];

        while (left < right && nums[left] <= base) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = base;
    return left;
}