// 第一个优秀元素的索引是1，数组的第一个元素空置
function buildMaxHeap(nums, len) {
    const start = Math.floor(len / 2);
    for (let i = start; start > 0; start--) {
        headAdjust(nums, i, len);
    }
}

// 将以k为根的子树调整为大根堆
function headAdjust(nums, k, len) {
    nums[0] = nums[k];
    // i 是左孩子
    for (let i = 2 * k; i <= len; i *= 2) {
        // 获取左右孩子较大的哪一个
        if (i < len && nums[i] < nums[i + 1]) { // nums[i + 1] 不会是undefined吗
            i++
        }

        if (nums[0] >= nums[i]) { // 说明当前元素比左右孩子节点大，则返回
            break;
        } else { // 如果孩子元素大于父元素，则交换。继续往下沉
            nums[k] = nums[i];
            k = i; // k 存储那个较大的孩子元素
        }
    }

    nums[k] = nums[0];
}

function heapSort(nums, len) {
    buildMaxHeap(nums, len);
    for (let i = len; i > 1; i--) {
        swap(nums, i, 1);
        headAdjust(nums, 1, i - 1); // 最后一个元素从堆中溢出了（因为已经排好序了）
    }
}