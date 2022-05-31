/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const initWindows = nums.slice(0, k).map((value, index) => { return { value, index } });
    // 注意：维护一个大顶堆
    const priorityQueue = new PriorityQueue((b, a) => a.value - b.value, initWindows);
    const result = [priorityQueue.peek().value];

    for (let right = k; right < nums.length; right++) {
        priorityQueue.enqueue({ value: nums[right], index: right });
        const leftIndex = right - k + 1; // 假设 k = 1, right = 1 ,那 leftIndex = 1; window: [leftIndex, right]
        while (priorityQueue.peek().index < leftIndex) { // 直到最大值的落在窗口内
            priorityQueue.dequeue();
        }
        result.push(priorityQueue.peek().value);
    }
    return result;
};

function PriorityQueue(compareTo, items = []) {
    // 插入式建堆
    this.items = []; // 空堆
    this.compareTo = compareTo;
    items.forEach(item => this.enqueue(item)); // 逐个插入元素    
}

PriorityQueue.prototype.size = function () {
    return this.items.length;
}

PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
}

PriorityQueue.prototype.peek = function () {
    return this.items.length ? this.items[0] : undefined;
}

PriorityQueue.prototype.dequeue = function () {
    const size = this.items.length
    if (size <= 1) {
        return this.items.pop()
    }
    // 先交换头尾元素        
    swap(this.items, 0, this.items.length - 1);
    // 然后弹出最后一个元素（上一步的堆顶元素）
    const popItem = this.items.pop();
    // 堆化（下溢）
    this._down(this.items, 0)
    return popItem
}

PriorityQueue.prototype._down = function (items, parentIndex) {
    const heapSize = items.length;


    while (true) {
        // 第一次写错了，写在外面了
        const c1Index = 2 * parentIndex + 1;
        const c2Index = 2 * parentIndex + 2;
        let minIndex = parentIndex


        // items[minIndex] > items[c1Index]
        if (c1Index < heapSize && this.compareTo(items[minIndex], items[c1Index]) > 0) {
            minIndex = c1Index
        }

        // items[minIndex] > items[c2Index]
        if (c2Index < heapSize && this.compareTo(items[minIndex], items[c2Index]) > 0) {
            minIndex = c2Index
        }

        // 包含了currentIndex是叶子节点 和 最小情况
        if (parentIndex === minIndex) {
            break;
        }

        swap(items, parentIndex, minIndex);
        parentIndex = minIndex;
    }
}

// 就是 heapify
PriorityQueue.prototype.enqueue = function (key) {
    this.items.push(key)
    // 获取存储位置
    let currentIndex = this.items.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // this.items[currentIndex] < this.items[parentIndex]
    while (currentIndex > 0 && this.compareTo(this.items[currentIndex], this.items[parentIndex]) < 0) {
        swap(this.items, currentIndex, parentIndex);
        currentIndex = parentIndex;

        // 第一次写错了，写在外面了
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}