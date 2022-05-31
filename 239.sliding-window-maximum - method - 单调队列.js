/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const monotonousQueue = new MonotonousQueue(k);
    nums.slice(0, k).forEach((value, index) => monotonousQueue.enqueue(value, index));
    const result = [monotonousQueue.peek().value]
    for (let right = k; right < nums.length; right++) {
        monotonousQueue.enqueue(nums[right], right);
        result.push(monotonousQueue.peek().value)
    }
    return result;
}

function MonotonousQueue(windowSize) {
    this.rightIndex = -1;
    // this.compareTo = compareTo;
    this.windowSize = windowSize;
    this.queue = []; // 队头->队尾：单调递减
}

MonotonousQueue.prototype.enqueue = function (value, rightIndex) {
    const currentItem = { value, index: rightIndex }
    if (this.queue.length === 0) {
        this.queue.push(currentItem);
        return;
    }

    // 如果队尾的元素比我小，就失去意义可以移走
    while (this.queue.length && currentItem.value >= this.queue[this.queue.length - 1].value) {
        this.queue.pop();
    }

    this.queue.push(currentItem);
    this.rightIndex = rightIndex;
    const leftIndex = rightIndex - this.windowSize + 1;
    if (this.queue[0].index < leftIndex) {
        this.queue.shift()
    }
}

MonotonousQueue.prototype.peek = function () {
    return this.queue[0];
}